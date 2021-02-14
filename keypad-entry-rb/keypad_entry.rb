# given a message (as a string), return the number of keystrokes require to text it on a flip phone
# spaces, asterisks, and pound signs count as 1
# 0 counts as 2
# assume other punctuation can be ignored and that casing doesn't matter
def calculate_total_presses(phrase)
  inputs = {
    2 => 'abc',
    3 => 'def',
    4 => 'ghi',
    5 => 'jkl',
    6 => 'mno',
    7 => 'pqrs',
    8 => 'tuv',
    9 => 'wxyz'
  }

  counter = 0

  phrase.chars.each do |char|
    if char === '0'
      counter += 2
    elsif char === ' ' || char === '*' || char === '#' || char === '1'
      counter += 1
    else
      if char.to_i != 0 # if character is a digit
        match = inputs.select { |k, v| k === char.to_i }
        counter += match.values.join.length + 1
      else
        match = inputs.select { |k, v| v.include?(char.downcase) }
        counter += match.values.join.index(char.downcase) + 1
      end
    end
  end

  return counter
end
