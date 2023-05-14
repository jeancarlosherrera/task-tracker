import Button from './Button'

const Header = ({name}) => {
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color='green' text='Add'/>
        </header>
    )    
}

export default Header