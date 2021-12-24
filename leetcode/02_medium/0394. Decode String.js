// https://leetcode.com/problems/decode-string/

const decodeString = function (s) {

  const simpleCodeToStr = simpleCode => {
    let s=''
    for (let i = 1; i <= simpleCode.match(/[0-9]+/)[0]; i++) {
      s=s.concat(simpleCode.match(/[a-z]+/)[0])
    }
    return s
  }

  let regex = /[0-9]*\[[a-z]*]/i
  while (s.match(regex)) s=s.replace(regex, simpleCodeToStr(s.match(regex)[0]))
  return s

}
