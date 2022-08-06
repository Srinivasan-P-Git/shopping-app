import CategoryItem from '../category-item/category-item.component';

import './categories-list.styles.scss';

const CategoriesList = ({ className }) => {
    const categories = [
        {
            id: 1,
            name: 'Hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
        },
        {
            id: 2,
            name: 'Jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
        },
        {
            id: 3,
            name: 'Sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
        },
        {
            id: 4,
            name: 'Mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
        },
        {
            id: 5,
            name: 'Womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
        }
    ];
    return (
        <div className={`categories-container ${className}`}>
            {
                categories.map(category => <CategoryItem key={category.id} category={category} />)
            }
        </div>
    )
}

export default CategoriesList;