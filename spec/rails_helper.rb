ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)

if Rails.env.production?
  abort("The Rails environment is running in production mode!")
end

require 'spec_helper'
require 'rspec/rails'
require 'capybara/rails'
require 'capybara/rspec'
require 'capybara/poltergeist'
require 'coveralls'
require 'factory_girl'

ActiveRecord::Migration.maintain_test_schema!
Coveralls.wear!

RSpec.configure do |config|
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!
  config.include FactoryGirl::Syntax::Methods

  config.before(:each) do
    Place.destroy_all
    Category.destroy_all
  end
end

Capybara.javascript_driver = :poltergeist
