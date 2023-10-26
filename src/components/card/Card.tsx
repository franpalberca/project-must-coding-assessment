import styled from 'styled-components';
type Props = {
    name: string;
    description: string;
    url: string;
}

const Card = (props: Props) => {
    const {name, description, url} = props;
  return (
    <CardStyles>
    <div key={name} className='card__box'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href={url} target='_blank'>{url}</a>
                </div>
                </CardStyles>
  )
}

const CardStyles = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
margin-top: 1rem;
overflow-y: scroll;
max-height: 100vh;
& .card__box {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
    max-width: 90%;
} & h3 {
    font-size: 1.5rem;
    font-weight: 600;
}
& p {
    font-size: 1rem;
    font-weight: 400;
}
`
export default Card