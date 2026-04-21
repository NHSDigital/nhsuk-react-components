{
  description = "NHS UK React Components Development Environment";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    treefmt-nix = {
      url = "github:numtide/treefmt-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    git-hooks = {
      url = "github:cachix/git-hooks.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    {
      self,
      flake-utils,
      nixpkgs,
      treefmt-nix,
      git-hooks,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        treefmt = treefmt-nix.lib.evalModule pkgs (_: {
          projectRootFile = "flake.nix";
          programs = {
            actionlint.enable = true;
            jsonfmt.enable = false;
            mdformat.enable = true;
            oxfmt.enable = true;
          };
        });

        precommit = git-hooks.lib.${system}.run {
          src = self;
          hooks = {
            check-added-large-files.enable = true;
            check-case-conflicts.enable = true;
            check-merge-conflicts.enable = true;
            end-of-file-fixer.enable = true;
            treefmt = {
              enable = true;
              package = treefmt.config.build.wrapper;
            };
          };
        };
      in
      {
        checks.precommit = precommit;

        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            corepack_24
            nodejs_24
            oxfmt
            oxlint
          ];

          shellHook = ''
            ${precommit.shellHook}
            yarn
          '';
        };

        formatter = treefmt.config.build.wrapper;
      }
    );
}
