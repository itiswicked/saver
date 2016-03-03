require 'rails_helper'


feature 'user creates place', js: true do
  # [ ] when user presses the + button, a form appears on the page
  # [ ] upon successful submission of the form, a place is added successfully
  #     to the list of places, as well a banner that says "added!"
  # [ ] upon unsuccessful submission of a form, a banner appears listing the
  #     errors.

  before(:each) do
    visit root_path
    click_button 'add'
  end

  scenario 'sucessfully' do
    fill_in 'Name', with: 'Frogmore'
    fill_in 'Neighborhood', with: 'Jamaica Plain'
    fill_in 'Description', with: 'Super good southern style hot cakes!'
    select 'Restaurant', from: 'Category'
    click_button 'Create'

    expect(page).to have_content 'Frogmore'
    expect(page).to have_content 'Jamaica Plain'
    expect(page).to have_content 'Super good southern style hot cakes!'
  end

  scenario 'unseccessfully due to missing name' do
    fill_in 'Neighborhood', with: 'Jamaica Plain'
    fill_in 'Description', with: 'Super good southern style hot cakes!'
    select 'Restaurant', from: 'Category'
    click_button 'Create'

    expect(page).to have_content 'Name can\'t be blank'
  end

  scenario 'unseccessfully due to missing neighborhood' do
    fill_in 'Name', with: 'Frogmore'
    fill_in 'Description', with: 'Super good southern style hot cakes!'
    select 'Restaurant', from: 'Category'
    click_button 'Create'

    expect(page).to have_content 'Neighborhood cant\'t be blank'
  end

  scenario 'unseccessfully due to unselected category' do
    fill_in 'Name', with: 'Frogmore'
    fill_in 'Neighborhood', with: 'Jamaica Plain'
    fill_in 'Description', with: 'Super good southern style hot cakes!'
    click_button 'Create'

    expect(page).to have_content 'A category must be selected'
  end

end
