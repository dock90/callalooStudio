export default {
  title: 'Menu Item',
  name: 'menuItem',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'menuItemName',
      type: 'string'
    },
    {
      title: 'Price',
      name: 'menuItemPrice',
      type: 'number'
    },
    {
      title: 'Category',
      name: 'menuItemCategory',
      type: 'reference',
      to: [{ type: 'menuCategory' }]
    },
    {
      title: 'Description',
      name: 'menuItemDescription',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      title: 'menuItemName',
      subtitle: 'menuCategoryName'
    }
  }
}
