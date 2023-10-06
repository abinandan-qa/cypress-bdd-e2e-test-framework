Feature: Accessing a product
  @Regression
  Scenario Outline: Access a Product via category after applying multiple filters
    Given I open Ebay shopping site
    When I click on "Cell phones & accessories" category under Shop by Category Menu
    And I click on "Cell Phones & Smartphones" in the left hand sidenavigation section
    # In assignment it is mentioned to click on See All button for the below step but in application we are unable to find it
    And I click on All Filters button
    And I apply "Screen Size" filter with options "<Screen_Size_Variants>"
    And I apply "Price" filter with options "<Price_Range>"
    And I apply "Item Location" filter with options "<Item_Location>"
    And I click on apply button
    Then I should see the applied tags in the filter

    Examples:
      # For multiple Screen Size variants selection please pass the values seperated by comma
      | Screen_Size_Variants       | Price_Range   | Item_Location |
      | 4.0 - 4.4 in, 4.5 - 4.9 in | 0 to 400      | North America |
      | 5.5 - 5.9 in               | 1110 to 41100 | US Only       |


  @Regression
  Scenario Outline: Access a Product via Search
    Given I open Ebay shopping site
    When I type "<Product_Name>" in the search textbox and hit search
    When I click on "Cell phones & accessories" category under Shop by Category Menu
    Then I see the first result name matches with the "<Product_Name>"

    Examples:
      | Product_Name |
      | iphone       |