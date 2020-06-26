import { MdRestaurantMenu } from 'react-icons/md'

export default {
  title: 'Menu Item',
  name: 'menuItem',
  type: 'document',
  icon: MdRestaurantMenu,
  fields: [
    {
      title: 'Name',
      name: 'menuItemName',
      type: 'string',
      description: 'The name of the menu item.'
    },
    {
      title: 'Price',
      name: 'menuItemPrice',
      type: 'number',
      description: 'How much does this item cost?'
    },
    {
      title: 'Category',
      name: 'menuItemCategory',
      type: 'reference',
      to: [{ type: 'menuCategory' }],
      description: 'Which meal category does this item belong in.'
    },
    {
      title: 'Description',
      name: 'menuItemDescription',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Write a short description of what the item is.'
    }
  ],
  preview: {
    select: {
      title: 'menuItemName',
      subtitle: 'menuItemCategory.menuCategoryName',
    },
  }
}
