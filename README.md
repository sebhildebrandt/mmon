# mmon

micro-mon - Simple CLI system and OS information tool for Linux and OS X implemented in [node.js][nodejs-url]

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Git Issues][issues-img]][issues-url]
  [![deps status][daviddm-img]][daviddm-url]
  [![MIT license][license-img]][license-url]

## Quick Start

### Installation & Start

```bash
$ npm install mmon -g
& mmon
```

## Features

![micro-monitor](https://www.plus-innovations.com/images/micro-monitor.png)

- current CPU Load
- current MEM usage
- File System usage (overall and per mount)
- File System Stats (R/W per second, IOPS)
- Network Stats (rx, tx per second)
- \# Network Connections
- \# Processes
- Users online
- Docker Containers

I tested it on several Debian, Raspbian, Ubuntu distributions as well as OS X (Mavericks, Yosemite, El Captain).

This CLI tool depends on the [systeminformation][systeminformation-url] npm package that I wrote. Have a look at it, if you are interested. 

## Command Line Options

**Set interval**

The default update interval is 2 seconds but you can change it easily: 
the following command line option sets it to 5 seconds: 
  
```
mmon -i 5 
```


## Version history

| Version        | Date           | Comment  |
| -------------- | -------------- | -------- |
| 1.0.0          | 2016-08-20     | initial version |

## Comments

If you have ideas or comments, please do not hesitate to contact me.


Happy monitoring!

Sincerely,

Sebastian Hildebrandt, [+innovations](http://www.plus-innovations.com)

## Credits

Written by Sebastian Hildebrandt [sebhildebrandt](https://github.com/sebhildebrandt)

#### Contributers

- none so far. Comments, pull requests welcome ;-) 

## Copyright Information

Linux is a registered trademark of Linus Torvalds, OS X is a registered trademark of Apple Inc.,
Windows is a registered trademark of Microsoft Corporation. Node.js is a trademark of Joyent Inc.,
Intel is a trademark of Intel Corporation, Raspberry Pi is a trademark of the Raspberry Pi Foundation,
Debian is a trademark of the Debian Project, Ubuntu is a trademark of Canonical Ltd.
All other trademarks are the property of their respective owners.

## License [![MIT license][license-img]][license-url]

>The [`MIT`][license-url] License (MIT)
>
>Copyright &copy; 2014-2016 Sebastian Hildebrandt, [+innovations](http://www.plus-innovations.com).
>
>Permission is hereby granted, free of charge, to any person obtaining a copy
>of this software and associated documentation files (the "Software"), to deal
>in the Software without restriction, including without limitation the rights
>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
>copies of the Software, and to permit persons to whom the Software is
>furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in
>all copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
>THE SOFTWARE.
>
>Further details see [LICENSE](LICENSE) file.


[npm-image]: https://img.shields.io/npm/v/mmon.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mmon
[downloads-image]: https://img.shields.io/npm/dm/mmon.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/mmon

[license-url]: https://github.com/sebhildebrandt/mmon/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[npmjs-license]: https://img.shields.io/npm/l/mmon.svg?style=flat-square
[systeminformation-url]: https://github.com/sebhildebrandt/systeminformation

[nodejs-url]: https://nodejs.org/en/
[docker-url]: https://www.docker.com/

[daviddm-img]: https://img.shields.io/david/sebhildebrandt/mmon.svg?style=flat-square
[daviddm-url]: https://david-dm.org/sebhildebrandt/mmon

[issues-img]: https://img.shields.io/github/issues/sebhildebrandt/mmon.svg?style=flat-square
[issues-url]: https://github.com/sebhildebrandt/mmon/issues
