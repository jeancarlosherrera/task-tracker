import Button from './Button'

const Header = ({onAdd, showAddTask}) => {

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button onClick={onAdd}  color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : 'Add'} /> 
        </header>
    )    
}

export default Header