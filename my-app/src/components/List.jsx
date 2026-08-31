

function List({items = [], category}) {

    const itemList = items;
    const itemCategory = category;

    // //sort by their name property(Alphabetical)
    // fruits.sort((a,b) => a.name.localeCompare(b.name));

    // //reverse order
    // fruits.sort((a,b) => b.name.localeCompare(a.name));

    //sort by increasing calories: a comes before b, b comes before a. 100 - 50 therefore a wil be ahead of b.
    //b-a is decreasing 
    // fruits.sort((a,b) => a.calories - b.calories);

    //Filter method practice:
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);


    //map method will return new array
    //each row of data should have a unique id
    const listItems = itemList.map(item => 
    <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b>
    </li>);

    return(
        <>
        <h3 className = "list-category">{itemCategory}</h3>
        <ol>{listItems}</ol>
        </>
    );
}

export default List