let s = 'kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv'

const longestPalindrome = s => {

  if (s.length === 1) return s

  const isPalindrome = s => {

    let isPal = true

    let c0 = Math.floor(s.length / 2)
    let c1 = s.length % 2 ? c0 : c0 - 1

    while (c0 < s.length) {

      if (s[c1] !== s[c0]) {
        return false
      } else {
        c0 += 1
        c1 -= 1
      }

    }

    return isPal

  }

  let pLength = 2, maxPal = s[0]

  do {

    let ss = '', isPal = false, notFounded = true

    for (let i = 0; i <= s.length - pLength && notFounded; i++) {

      ss = s.substr(i, pLength)

      isPal = isPalindrome(ss)

      if (isPal && maxPal.length < ss.length) {

        maxPal = ss
        notFounded = false

      }

    }

    pLength++

  } while (pLength <= s.length)

  return maxPal

}

console.log(longestPalindrome(s))

