RSpec.configure do |config|
  config.expect_with :rspec do |expectations|

    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  by changing the `mock_with` option here.

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end
end
