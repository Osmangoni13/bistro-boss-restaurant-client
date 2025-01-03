
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu, loading] = useMenu();
    const popular = menu.filter(item => item.category === "popular");
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            />
            <section className='grid md:grid-cols-2 gap-10 mx-auto'>
                {popular.map(item => (
                    <MenuItem
                        key={item._id}
                        item={item}
                    />
                ))}
            </section>
            <button className='btn btn-outline my-4 border-0 border-b-4 text-black text-center flex  mx-auto'>View Full Menu</button>
        </div>
    );
};

export default PopularMenu;
