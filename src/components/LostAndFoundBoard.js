import styles from './LostAndFoundBoard.module.css';
import recycle from '../images/recycle.svg';
import location from '../images/location.svg';
import date from '../images/date.svg';
import person from '../images/individual.svg';
import itemImage from '../images/item.svg';
import { useAuthContext } from '../hooks/UseAuthContext';
import { useItemsContext } from '../hooks/UseItemContext.js';
import { useState, useEffect } from 'react';
import Spinner from './Spinner.js';

const LostAndFoundBoard = () =>{
    const { user } = useAuthContext();
    const { items, dispatch } = useItemsContext();
    const [error, setError ] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [itemsLoading, setItemsLoading] = useState(true);
    
    const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
     console.log(filteredItems);
     useEffect(()=>{
        const fetchItems = async()=>{
            setItemsLoading(true);
            try{
            const response = await fetch('/api/items/',{
                method: 'GET',
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json();
            if(response.ok)
            {
            
                dispatch({type: 'SET_ITEMS', payload: json});
                
                
            }
            if(!response.ok)
            {
                setError(json.error);
            }
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setItemsLoading(false);
        }
        }
        if(user)
        {
            fetchItems();
        }

    },[dispatch, user])
    if(itemsLoading)  return <Spinner/>;
   return(
    <div className={styles.lostAndFoundBoardContainer}>
        <input className={styles.search} type="search" placeholder="Search for all lost or found items" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <div className={styles.categoryButtons}>
            <button>All</button>
            <button>lost</button>
            <button>found</button>
            <button>active</button>
            <button>Resolved</button>
        </div>
        <div className={styles.gridCards}>
          {filteredItems &&  items.map((item)=>(<div className={styles.card}>
                <div className={styles.viewDetails}>
                    <button className={styles.viewDetailsButton}>view details</button>
                    <div className={styles.rightButtons}>
                    <button className={styles.active}>active</button>
                     <img src={recycle} alt="recycle"/>
                    </div>
                 </div>
                   <div className={styles.note}>
                    <h5 className={styles.cardTitle}>{item.title}</h5>
                    <p className={styles.cardDescription}>{item.description}</p>
                    </div>
                    <div className={styles.smallEntities}>
                        <div className={styles.location}>
                            <img src={location} alt="location"/>
                            <p className={styles.smallLocation}>{item.locationText}</p>
                        </div>
                        <div className={styles.date}>
                         <img src={date} alt="date"/>
             <p className={styles.smallLocation}>{item.updatedAt}</p>

                        </div>
                        <div className={styles.person}>
                         <img src={person} alt="person"/>
             <p className={styles.smallLocation}>{item.postedBy.username}</p>

                        </div>
                        <div className={styles.cardImage}>
                            <img src={`http://localhost:4000/${item.imageUrl}`} alt="item"/>
                        </div>
                    </div>
            </div>)) }
            <div className={styles.card}>
                <div className={styles.viewDetails}>
                    <button className={styles.viewDetailsButton}>view details</button>
                    <div className={styles.rightButtons}>
                    <button className={styles.active}>active</button>
                     <img src={recycle} alt="recycle"/>
                    </div>
                 </div>
                   <div className={styles.note}>
                    <h5 className={styles.cardTitle}>Black leather Wallet</h5>
                    <p className={styles.cardDescription}>Lost black leather wallet with credit cards and ID. Contains driver's license with initials J.S</p>
                    </div>
                    <div className={styles.smallEntities}>
                        <div className={styles.location}>
                            <img src={location} alt="location"/>
                            <p className={styles.smallLocation}>Central Park, near main entrance</p>
                        </div>
                        <div className={styles.date}>
                         <img src={date} alt="date"/>
             <p className={styles.smallLocation}>11/28/2024</p>

                        </div>
                        <div className={styles.person}>
                         <img src={person} alt="person"/>
             <p className={styles.smallLocation}>John Smith</p>

                        </div>
                        <div className={styles.cardImage}>
                            <img src={itemImage} alt="item"/>
                        </div>
                    </div>
            </div>
            <div className={styles.card}>
                <div className={styles.viewDetails}>
                    <button className={styles.viewDetailsButton}>view details</button>
                    <div className={styles.rightButtons}>
                    <button className={styles.active}>active</button>
                     <img src={recycle} alt="recycle"/>
                    </div>
                 </div>
                   <div className={styles.note}>
                    <h5 className={styles.cardTitle}>Black leather Wallet</h5>
                    <p className={styles.cardDescription}>Lost black leather wallet with credit cards and ID. Contains driver's license with initials J.S</p>
                    </div>
                    <div className={styles.smallEntities}>
                        <div className={styles.location}>
                            <img src={location} alt="location"/>
                            <p className={styles.smallLocation}>Central Park, near main entrance</p>
                        </div>
                        <div className={styles.date}>
                         <img src={date} alt="date"/>
             <p className={styles.smallLocation}>11/28/2024</p>

                        </div>
                        <div className={styles.person}>
                         <img src={person} alt="person"/>
             <p className={styles.smallLocation}>John Smith</p>

                        </div>
                        <div className={styles.cardImage}>
                            <img src={itemImage} alt="item"/>
                        </div>
                    </div>
            </div>
            <div className={styles.card}>
                <div className={styles.viewDetails}>
                    <button className={styles.viewDetailsButton}>view details</button>
                    <div className={styles.rightButtons}>
                    <button className={styles.active}>active</button>
                     <img src={recycle} alt="recycle"/>
                    </div>
                 </div>
                   <div className={styles.note}>
                    <h5 className={styles.cardTitle}>Black leather Wallet</h5>
                    <p className={styles.cardDescription}>Lost black leather wallet with credit cards and ID. Contains driver's license with initials J.S</p>
                    </div>
                    <div className={styles.smallEntities}>
                        <div className={styles.location}>
                            <img src={location} alt="location"/>
                            <p className={styles.smallLocation}>Central Park, near main entrance</p>
                        </div>
                        <div className={styles.date}>
                         <img src={date} alt="date"/>
             <p className={styles.smallLocation}>11/28/2024</p>

                        </div>
                        <div className={styles.person}>
                         <img src={person} alt="person"/>
             <p className={styles.smallLocation}>John Smith</p>

                        </div>
                        <div className={styles.cardImage}>
                            <img src={itemImage} alt="item"/>
                        </div>
                    </div>
            </div>
            <div className={styles.card}>
                <div className={styles.viewDetails}>
                    <button className={styles.viewDetailsButton}>view details</button>
                    <div className={styles.rightButtons}>
                    <button className={styles.active}>active</button>
                     <img src={recycle} alt="recycle"/>
                    </div>
                 </div>
                   <div className={styles.note}>
                    <h5 className={styles.cardTitle}>Black leather Wallet</h5>
                    <p className={styles.cardDescription}>Lost black leather wallet with credit cards and ID. Contains driver's license with initials J.S</p>
                    </div>
                    <div className={styles.smallEntities}>
                        <div className={styles.location}>
                            <img src={location} alt="location"/>
                            <p className={styles.smallLocation}>Central Park, near main entrance</p>
                        </div>
                        <div className={styles.date}>
                         <img src={date} alt="date"/>
             <p className={styles.smallLocation}>11/28/2024</p>

                        </div>
                        <div className={styles.person}>
                         <img src={person} alt="person"/>
             <p className={styles.smallLocation}>John Smith</p>

                        </div>
                        <div className={styles.cardImage}>
                            <img src={itemImage} alt="item"/>
                        </div>
                    </div>
            </div>
            <div className={styles.card}>
                <div className={styles.viewDetails}>
                    <button className={styles.viewDetailsButton}>view details</button>
                    <div className={styles.rightButtons}>
                    <button className={styles.active}>active</button>
                     <img src={recycle} alt="recycle"/>
                    </div>
                 </div>
                   <div className={styles.note}>
                    <h5 className={styles.cardTitle}>Black leather Wallet</h5>
                    <p className={styles.cardDescription}>Lost black leather wallet with credit cards and ID. Contains driver's license with initials J.S</p>
                    </div>
                    <div className={styles.smallEntities}>
                        <div className={styles.location}>
                            <img src={location} alt="location"/>
                            <p className={styles.smallLocation}>Central Park, near main entrance</p>
                        </div>
                        <div className={styles.date}>
                         <img src={date} alt="date"/>
             <p className={styles.smallLocation}>11/28/2024</p>

                        </div>
                        <div className={styles.person}>
                         <img src={person} alt="person"/>
             <p className={styles.smallLocation}>John Smith</p>

                        </div>
                        <div className={styles.cardImage}>
                            <img src={itemImage} alt="item"/>
                        </div>
                    </div>
            </div>
            <div className={styles.card}>
                <div className={styles.viewDetails}>
                    <button className={styles.viewDetailsButton}>view details</button>
                    <div className={styles.rightButtons}>
                    <button className={styles.active}>active</button>
                     <img src={recycle} alt="recycle"/>
                    </div>
                 </div>
                   <div className={styles.note}>
                    <h5 className={styles.cardTitle}>Black leather Wallet</h5>
                    <p className={styles.cardDescription}>Lost black leather wallet with credit cards and ID. Contains driver's license with initials J.S</p>
                    </div>
                    <div className={styles.smallEntities}>
                        <div className={styles.location}>
                            <img src={location} alt="location"/>
                            <p className={styles.smallLocation}>Central Park, near main entrance</p>
                        </div>
                        <div className={styles.date}>
                         <img src={date} alt="date"/>
             <p className={styles.smallLocation}>11/28/2024</p>

                        </div>
                        <div className={styles.person}>
                         <img src={person} alt="person"/>
             <p className={styles.smallLocation}>John Smith</p>

                        </div>
                        <div className={styles.cardImage}>
                            <img src={itemImage} alt="item"/>
                        </div>
                    </div>
            </div>
            <div className={styles.card}>
                <div className={styles.viewDetails}>
                    <button className={styles.viewDetailsButton}>view details</button>
                    <div className={styles.rightButtons}>
                    <button className={styles.active}>active</button>
                     <img src={recycle} alt="recycle"/>
                    </div>
                 </div>
                   <div className={styles.note}>
                    <h5 className={styles.cardTitle}>Black leather Wallet</h5>
                    <p className={styles.cardDescription}>Lost black leather wallet with credit cards and ID. Contains driver's license with initials J.S</p>
                    </div>
                    <div className={styles.smallEntities}>
                        <div className={styles.location}>
                            <img src={location} alt="location"/>
                            <p className={styles.smallLocation}>Central Park, near main entrance</p>
                        </div>
                        <div className={styles.date}>
                         <img src={date} alt="date"/>
             <p className={styles.smallLocation}>11/28/2024</p>

                        </div>
                        <div className={styles.person}>
                         <img src={person} alt="person"/>
             <p className={styles.smallLocation}>John Smith</p>

                        </div>
                        <div className={styles.cardImage}>
                            <img src={itemImage} alt="item"/>
                        </div>
                    </div>
            </div>
        </div>

    </div>
   )
}
export default LostAndFoundBoard;