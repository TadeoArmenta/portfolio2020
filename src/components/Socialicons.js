import React, {useState, useEffect} from "react";
import axios from 'axios';
import LineIcon from 'react-lineicons';
import { ReactComponent as Upwork } from '../assets/images/upwork.svg'
import { ReactComponent as Freelancer } from '../assets/images/freelancer.svg'

function Socialicons(props){
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    axios.get('/api/information')
      .then(response =>{
        setSocialLinks(response.data.socialLinks);
      })
  }, [])

  return (
    <ul className={props.bordered ? 'mi-socialicons mi-socialicons-bordered' : 'mi-socialicons'}>
      {!socialLinks.upwork ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.upwork}>
          <Upwork className="icon-upwork" name="upwork" />
        </a>
      </li>}
      {!socialLinks.freelancer ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.freelancer}>
          <Freelancer className="icon-freelancer" name="freelancer"/>
        </a>
      </li>}
      {!socialLinks.telegram ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.telegram}>
          <LineIcon name="telegram"/>
        </a>
      </li>}
      {!socialLinks.facebook ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.facebook}>
          <LineIcon name="facebook"/>
        </a>
      </li>}
      {!socialLinks.twitter ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.twitter}>
          <LineIcon name="twitter"/>
        </a>
      </li>}
      {!socialLinks.pinterest ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.pinterest}>
          <LineIcon name="pinterest"/>
        </a>
      </li>}
      {!socialLinks.behance ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.behance}>
          <LineIcon name="behance"/>
        </a>
      </li>}
      {!socialLinks.linkedin ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.linkedin}>
          <LineIcon name="linkedin"/>
        </a>
      </li>}
      {!socialLinks.dribbble ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.dribbble}>
          <LineIcon name="dribbble"/>
        </a>
      </li>}
      {!socialLinks.github ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.github}>
          <LineIcon name="github"/>
        </a>
      </li>}
      {!socialLinks.stackoverflow ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.stackoverflow}>
          <LineIcon name="stackoverflow"/>
        </a>
      </li>}
    </ul>
  );
}

export default Socialicons;
