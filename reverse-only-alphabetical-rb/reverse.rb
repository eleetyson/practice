# given a string, return it with only the alphabetical characters reversed
def reverse_only_alphabetical(input)
  left = 0
  right = input.length - 1

  while left < right
    if !is_letter?(input[left])
      left += 1
    elsif !is_letter?(input[right])
      right -= 1
    else # only swap once both pointers point at letters
      temp = input[left]
      input[left] = input[right]
      input[right] = temp

      left += 1
      right -= 1
    end
  end

  return input
end

# helper method checks whether character is a letter
def is_letter?(l)
  return l.match?(/[A-Za-z]/)
end
