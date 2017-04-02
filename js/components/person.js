import React from 'react';

export default function Person() {
const name = 'Derek Zoolander';
    const imageUrl = 'http://www.leadersayswhat.com/wp-content/uploads/2016/02/derek-zoolander-thumb.jpg';
const job = 'Male model';
return (
<div className="person">
<div className="person-name">{name}</div>
<img className="person-img" src={imageUrl} />
<div className="person-job">
{job}
</div>
</div>
);
}
