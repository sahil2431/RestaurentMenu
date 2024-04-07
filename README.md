# My Restaurant Menu Site

Welcome to our restaurant menu site! Here you can explore a variety of delicious dishes and beverages from our menu.

## Features

- Browse through different categories of dishes:
  - Starters
  - Mains
  - Desserts
  - Beverages
- Each dish is accompanied by its:
  - Title
  - Description
  - Price
  - Image
- Dynamic display of dishes: new items can be added easily to the menu

## How to Use

1. **Viewing Dishes:**
   - Simply scroll through the page to explore the available dishes.
   - Click on the category tabs (e.g., Starters, Mains, etc.) to filter dishes by category.

2. **Adding New Dishes:**
   - To add new dishes to the menu, follow these steps:
     - Ensure you have the necessary details for the new dish: title, description, price, and image URL.
     - Edit the menu JSON file (`menu.json`) in the repository.
     - Add a new JSON object for the dish in the appropriate format:
       ```json
       {
         "id": [unique ID],
         "title": "[Title of the dish]",
         "category": "[Category of the dish]",
         "price": "[Price of the dish]",
         "description": "[Description of the dish]",
         "img": "[URL of the image for the dish]"
       }
       ```
     - Save the changes to the `menu.json` file.
     - Refresh the page to see the newly added dish in the menu.

3. **Updating Existing Dishes:**
   - To update existing dishes, follow the same process as adding new dishes, but edit the details of the respective dish in the `menu.json` file.

## Contributing

We welcome contributions to our menu site! If you have suggestions for new dishes, improvements to existing ones, or any other ideas to enhance the site, please feel free to submit a pull request.

Happy dining!
