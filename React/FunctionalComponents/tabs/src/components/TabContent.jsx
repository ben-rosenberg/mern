import '../style.css'

const TabContent = (props) => {
    const contents = [
        'Here is Tab 1\'s content...',
        '"Yo! Tab 3 was looking for you, he lives nextdoor. You should be good to just let yourself in." -Tab 2',
        '"Damn really, just gonna let yourself in? Think I could at least get a knock first??\
        This is my HOUSE bro..." -Tab 3'
    ];

    return (
        <div className="tab_content">
            <p>{contents[props.currentTabNumber - 1]}</p>
        </div>
    );
};

export default TabContent;