// Write a function that when given a URL as a string,
// parses out just the domain name and returns it as a string.
// For example:
// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

const url = [
  'http://github.com/carbonfive/raygun',
  'http://www.zombie-bites.com',
  'https://www.cnet.com',
  'www.yandex.ru'
]

function domainName(url) {
  let urlShort
  if(url.match(/http/g)) {
    urlShort = url.split('/')[2].split('.')
  } else {
    urlShort = url.split('.')
  }
  return urlShort[0]==='www'?urlShort[1]:urlShort[0]
}

console.log(domainName(url[0]))
console.log(domainName(url[1]))
console.log(domainName(url[2]))
console.log(domainName(url[3]))
