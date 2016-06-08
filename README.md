# Example

Quick example usage of using silk-babel-run... We use this internally
within our silk projects but now can also be dropped in for open source
usage...

## What does it do?

Provides built in hooks for instantly running our babel preset +
register ... The register logic is smart in that you can run multiple
silk-babel-run/register calls across multiple modules without hitting
performance problems by loading babel N times.

This also contains mocha helps (see test/mocha.opts) for setting up
babel+mocha.
