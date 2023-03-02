Feature: Purchasing a product
  @Regression
  Scenario: User should be able to place an order
    Given I open Shopping Site
    And I create a test user
    When I add products to the cart
    |category|product|
    |SPEAKERS|Bose SoundLink Wireless Speaker|
    |SPEAKERS|Bose SoundLink Wireless Speaker|
    And I go to cart page
    And I checkout
    And I make payment
    Then I see success message "Thank you for buying with Advantage"
    And Order number is generated

  @Sanity
  Scenario: User should be able to add product to cart
    Given I open Shopping Site
    When I add products to the cart
    |category|product|
    |SPEAKERS|Bose SoundLink Wireless Speaker|
