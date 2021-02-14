require_relative '../spec/spec_helper.rb'
require_relative './keypad_entry.rb'

describe 'count required presses' do
  it 'can handle a single word' do
    expect(calculate_total_presses('LOL')).to eq(9)
  end

  it 'can handle a sentence with spaces' do
    expect(calculate_total_presses('HOW R U')).to eq(13)
  end

  it 'can handle numbers too' do
    expect(calculate_total_presses('WHERE DO U WANT 2 MEET L8R')).to eq(47)
  end

  it '...and special characters' do
    expect(calculate_total_presses('*what up*')).to eq(11)
  end

  it 'casing should not matter' do
    expect(calculate_total_presses('*WHAT UP*')).to eq(11)
  end
end
