export const color=[
    "white",
    "Black",
    "Red",
    "marun",
    "Being",
    "Pink",
    "Green",
    "Yellow"
]
export const filters=[
    {
            id: 'color',
            name: 'Color',
            options: [
              { value: 'white', label: 'White', checked: false },
              { value: 'beige', label: 'Beige', checked: false },
              { value: 'blue', label: 'Blue', checked: true },
              { value: 'brown', label: 'Brown', checked: false },
              { value: 'green', label: 'Green', checked: false },
              { value: 'purple', label: 'Purple', checked: false },
              { value: 'yellow', label: 'Yellow', checked: false },
            ],
          },
        //   {
        //     id: 'category',
        //     name: 'Category',
        //     options: [
        //       { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        //       { value: 'sale', label: 'Sale', checked: false },
        //       { value: 'travel', label: 'Travel', checked: true },
        //       { value: 'organization', label: 'Organization', checked: false },
        //       { value: 'accessories', label: 'Accessories', checked: false },
        //     ],
        //   },
          {
            id: 'size',
            name: 'Size',
            options: [
              { value: 'S', label: 'S', checked: false },
              { value: 'M', label: 'M', checked: false },
              { value: 'L', label: 'L', checked: false },
            //   { value: '18l', label: '18L', checked: false },
            //   { value: '20l', label: '20L', checked: false },
            //   { value: '40l', label: '40L', checked: true },
            ],
          },
]

export const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"159-399",label:"₹159 To ₹399"},
            {value:"399-999",label:"₹399 To ₹999"},
            {value:"999-1999",label:"₹399 To ₹1999"},
            {value:"1999-2999",label:"₹1999 To ₹2999"},
            {value:"2999-3999",label:"₹2999 To ₹3999"},
        ]
    },
    {
        id:"discount",
        name:"Discount Range",
        options:[
            {value:"10",label:"10% And Above"},
            {value:"20",label:"20% And Above"},
            {value:"30",label:"30% And Above"},
            {value:"40",label:"40% And Above"},
            {value:"50",label:"50% And Above"},
            {value:"60",label:"60% And Above"},
            {value:"70",label:"70% And Above"},
            {value:"80",label:"80% And Above"},
        ]
    },
    {
        id:"stock",
        name:"Availability",
        options:[
            {value:"in_stock",label:"In Stock"},
            {value:"out_of_stock",label:"Out Of Stock"},
           
        ]
    }
    
   

]