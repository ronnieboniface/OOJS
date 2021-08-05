# Adventurer
# name, char_class, race, special_move
# methods to
# class method to: list name & char_class of all adventurers

class Adventurer
  def initialize(name, char_class, race, special_move)
    @name = name
    @char_class = char_class
    @race = race
    @special_move = special_move
  end

  def say_hello
    "Hello! I'm #{self.name} the #{self.race} #{self.char_class}."
  end

  def self.name_char_class
    self.all.each do |char|
      "#{char.name} - #{char.char_class}"
    end
  end
  
end
