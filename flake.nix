{
  description = "The Last Algorithms Course You'll Ever Need";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
      in
      with pkgs;
      {
        devShells.default = mkShell {
          buildInputs = [
            nodejs
            nodePackages.yarn
          ];
          shellHook = ''
            echo "node `${nodejs}/bin/node --version`"
          '';
        };
      }
    );
}
