import Button from './Button'

const Header = ({name}) => {

    const onClick = () => {
        console.log('Click')
    } 

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button onClick={onClick}  color='green' text='Add'/>
        </header>
    )    
}

export default Header