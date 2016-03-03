require 'rails_helper'

feature 'user views places', js: true do
# [ ] View saved places cards
# [ ] clicking on a place expands card and displays more info.

  let!(:place1) { FactoryGirl.create(:place) }
  let!(:place2) { FactoryGirl.create(:place) }

  scenario 'successfully' do
    visit root_path

    [place1, place2].each do |place|
      expect(page).to have_content place.name
      expect(page).to have_content place.neighborhood
      expect(page).to have_content place.description
      expect(page).to have_content place.category.name
    end
  end
end
