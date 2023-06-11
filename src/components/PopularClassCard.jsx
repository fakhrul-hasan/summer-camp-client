import Card from 'react-animated-3d-card';

const PopularClassCard = ({cls}) => {
    const {className, image} = cls;
    return (
        <Card cursorPointer={false} shineStrength={0.75}
        style={{
          cursor: "pointer"
        }}
        className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl mx-auto"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{className}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, vero!</p>
          <div className="card-actions">
          </div>
        </div>
      </Card>
    );
};

export default PopularClassCard;