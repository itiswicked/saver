CATEGORIES = ["Restaurant", "Park", "Museum", "Music Venue"]

FactoryGirl.define do
  factory :place do
    sequence(:name) { |n| "Place#{n}" }
    sequence(:neighborhood) { |n| "Neighborhood#{n}" }
    category
  end

  factory :category do
    name CATEGORIES.sample
  end
end
