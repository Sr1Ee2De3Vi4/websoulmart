import React, {Component} from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import FruitsVeg from '../pages/FruitsVeg/FruitsVeg' 
import Home from '../pages/home/Home' 
import { Route,BrowserRouter as Router,Switch } from  'react-router-dom'; 
import Dmstar from '../pages/dmstar/Dmstar';



import Offer from'../pages/Offer/Offer'

import BeautyHygiene from'../pages/BeautyHygiene/BeautyHygiene'

import CleanHousehold from'../pages/CleanHousehold/CleanHousehold'
import Allpurpose from'../pages/CleanHousehold/Allpurpose' 
import Bins from'../pages/CleanHousehold/Bins' 
import Car from'../pages/CleanHousehold/Car' 
import Detergents from'../pages/CleanHousehold/Detergents' 
import Disposables from'../pages/CleanHousehold/Disposables' 
import Fresheners from'../pages/CleanHousehold/Fresheners' 
import Mops from'../pages/CleanHousehold/Mops' 
import Party from'../pages/CleanHousehold/Party' 
import Pooja from'../pages/CleanHousehold/Pooja' 
import Stationery from'../pages/CleanHousehold/Stationery' 
import AllpurposeCard from'../pages/CleanHousehold/AllpurposeCard';
import DetergentsCard from'../pages/CleanHousehold/DetergentsCard';
import DisposablesCard from'../pages/CleanHousehold/DisposablesCard';
import FreshenersCard from'../pages/CleanHousehold/FreshenersCard';
import MopsCard from'../pages/CleanHousehold/MopsCard';
import PoojaCard from'../pages/CleanHousehold/PoojaCard';
import StationeryCard from'../pages/CleanHousehold/StationeryCard';
import BinsCard from'../pages/CleanHousehold/BinsCard';
import PartyCard from'../pages/CleanHousehold/PartyCard';
import CarCard from'../pages/CleanHousehold/CarCard';
import CleanHouseholdCard from'../pages/CleanHousehold/CleanHouseholdCard';

import KitchenGarden from'../pages/KitchenGarden/KitchenGarden'
import Appliances from '../pages/KitchenGarden/Appliances'
import Bakeware from '../pages/KitchenGarden/Bakeware'
import Cookware from '../pages/KitchenGarden/Cookware'
import Crockery from '../pages/KitchenGarden/Crockery'
import Flask from '../pages/KitchenGarden/Flask'
import Gardening from '../pages/KitchenGarden/Gardening'
import Kitchen from '../pages/KitchenGarden/Kitchen'
import Pet from '../pages/KitchenGarden/Pet'
import Steel from '../pages/KitchenGarden/Steel'
import Storage from '../pages/KitchenGarden/Storage'
import AppliancesCard from'../pages/KitchenGarden/AppliancesCard';
import PetCard from'../pages/KitchenGarden/PetCard';
import CookwareCard from'../pages/KitchenGarden/CookwareCard';
import KitchenAcceCard from'../pages/KitchenGarden/KitchenAcceCard';
import Gardeningcard from'../pages/KitchenGarden/Gardeningcard';
import SteelCard from'../pages/KitchenGarden/SteelCard';
import BakewareCard from'../pages/KitchenGarden/BakewareCard';
import CrockeryCard from'../pages/KitchenGarden/CrockeryCard';
import FlaskCard from'../pages/KitchenGarden/FlaskCard';
import StorageCard from'../pages/KitchenGarden/StorageCard';
import KitchenGardenCard from'../pages/KitchenGarden/KitchenGardenCard';

import EggsMeatFish from'../pages/EggsMeatFish/EggsMeatFish'
import Eggs from'../pages/EggsMeatFish/Eggs'
import Fish from'../pages/EggsMeatFish/Fish'
import Marinades from'../pages/EggsMeatFish/Marinades'
import Mutton from'../pages/EggsMeatFish/Mutton'
import Pork from'../pages/EggsMeatFish/Pork'
import Poultry from'../pages/EggsMeatFish/Poultry'
import Sausages from'../pages/EggsMeatFish/Sausages'
import CardEggsmeat from'../pages/EggsMeatFish/CardEggsmeat'
import CardEggs from'../pages/EggsMeatFish/CardEggs'
import CardFish from'../pages/EggsMeatFish/CardFish'
import CardMarinades from'../pages/EggsMeatFish/CardMarinades'
import CardMutton from'../pages/EggsMeatFish/CardMutton'
import CardPork from'../pages/EggsMeatFish/CardPork'
import CardPoultry from'../pages/EggsMeatFish/CardPoultry'
import CardSausages from'../pages/EggsMeatFish/CardSausages'

import GourmetWorldFood from'../pages/GourmetWorldFood/GourmetWorldFood'
import Cereals from'../pages/GourmetWorldFood/Cereals'
import Chocolates from'../pages/GourmetWorldFood/Chocolates'
import Cooking from'../pages/GourmetWorldFood/Cooking'
import Dairy from'../pages/GourmetWorldFood/Dairy'
import Drinks from'../pages/GourmetWorldFood/Drinks'
import Oils from'../pages/GourmetWorldFood/Oils'
import Pasta from'../pages/GourmetWorldFood/Pasta'
import Sauces from'../pages/GourmetWorldFood/Sauces'
import Snacks from'../pages/GourmetWorldFood/Snacks'
import Tinned from'../pages/GourmetWorldFood/Tinned'
import CardGourmet from'../pages/GourmetWorldFood/CardGourmet'
import CardCereals from'../pages/GourmetWorldFood/CardCereals'
import CardChocolates from'../pages/GourmetWorldFood/CardChocolates'
import CardCooking from'../pages/GourmetWorldFood/CardCooking'
import CardDairy from'../pages/GourmetWorldFood/CardDairy'
import CardDrinks from'../pages/GourmetWorldFood/CardDrinks'
import CardOils from'../pages/GourmetWorldFood/CardOils'
import CardPasta from'../pages/GourmetWorldFood/CardPasta'
import CardSauces from'../pages/GourmetWorldFood/CardSauces'
import CardSnacks from'../pages/GourmetWorldFood/CardSnacks'
import CardTinned from'../pages/GourmetWorldFood/CardTinned'

import BabyCare from'../pages/BabyCare/BabyCare'
import BabyAccessories from'../pages/BabyCare/BabyAccessories'
import Babybath from'../pages/BabyCare/Babybath'
import Babyfood from'../pages/BabyCare/Babyfood'
import Diapers from'../pages/BabyCare/Diapers'
import Feeding from'../pages/BabyCare/Feeding'
import Mothers from'../pages/BabyCare/Mothers'
import CardBabycare from'../pages/BabyCare/CardBabycare'
import CardBabyaccess from'../pages/BabyCare/CardBabyaccess'
import CardBabybath from'../pages/BabyCare/CardBabybath'
import CardBabyfood from'../pages/BabyCare/CardBabyfood'
import CardDiapers from'../pages/BabyCare/CardDiapers'
import CardFeeding from'../pages/BabyCare/CardFeeding'
import CardMothers from'../pages/BabyCare/CardMothers'

import ViewAll from'../pages/ViewAll/ViewAll'
import onion from '../pages/FruitsVeg/onion'
import anar from '../pages/FruitsVeg/anar'
import banana from '../pages/FruitsVeg/banana'
import carrot from '../pages/FruitsVeg/carrot'
import grapes from '../pages/FruitsVeg/grapes'
import mosambi from '../pages/FruitsVeg/mosambi'
import orange from '../pages/FruitsVeg/orange'
import potato from '../pages/FruitsVeg/potato'
import capsicum from '../pages/FruitsVeg/capsicum'
import Freshveg from '../pages/FruitsVeg/Freshveg'
import Amul from '../pages/BakeryCakesDairy/Amulbutter'
import Bourn from '../pages/Beverages/Beveragecard'
import Beautycard from '../pages/BeautyHygiene/Beautycard'
import Cleancard from '../pages/CleanHousehold/Cleancard'
import Kitchencard from '../pages/KitchenGarden/Kitchencard'
import Bank1 from'../pages/Bank/bank1'
import Triv from '../triv';
import Makeup from'../pages/BeautyHygiene/Makeup.js'
import FeminineHygiene from'../pages/BeautyHygiene/FeminineHygiene.js'
import OralCare from'../pages/BeautyHygiene/Oral Care.js'
import BathandHandWash from'../pages/BeautyHygiene/BathandHandWash.js'
import HealthandMedicine from'../pages/BeautyHygiene/HealthandMedicine.js'
import HairCare from'../pages/BeautyHygiene/HairCare.js';
import MensGrooming from'../pages/BeautyHygiene/MensGrooming.js';
import SkinCare from'../pages/BeautyHygiene/SkinCare.js';
import FragrancesandDeos from'../pages/BeautyHygiene/FragrancesandDeos.js';
import MakeupCard from'../pages/BeautyHygiene/MakeupCard.js';
import FeminineHygieneCard from'../pages/BeautyHygiene/FeminineHygieneCard';
import BathandHandWashCard from'../pages/BeautyHygiene/BathandHandWashCard';
import OralCareCard from'../pages/BeautyHygiene/OralCareCard';
import HealthandMedicineCard from'../pages/BeautyHygiene/HealthandMedicineCard';
import HairCareCard from'../pages/BeautyHygiene/HairCareCard';
import MensGroomingCard from'../pages/BeautyHygiene/MensGroomingCard';
import SkinCareCard from'../pages/BeautyHygiene/SkinCareCard';
import FragrancesandDeosCard from'../pages/BeautyHygiene/FragrancesandDeosCard';

import FV from '../pages/FruitsVeg/fv.js';

import vegetable from '../pages/FreshVeg/veg'
import Vegcard from '../pages/FreshVeg/vegcard'

import Herbs from '../pages/HerbsAndSeasonings/herbs'
import Herbcard from '../pages/HerbsAndSeasonings/herbcard'

import Freshfruits from'../pages/Freshfruits/Fruits'
import Fruitcard from'../pages/Freshfruits/fruitcard'

import ExoticFruitsVeggs from'../pages/ExoticFruitsVeggs/exoticmain'
import Exoticcard from'../pages/ExoticFruitsVeggs/exoticcard'

import Organic from '../pages/organics/organicnew'
import Organiccard from '../pages/organics/organiccard'

import CutsSpouts from'../pages/CutsSpouts/cuts'
import Cutcard from'../pages/CutsSpouts/cutcard'

import flowers from '../pages/flowersbunches/flowers'
import Flowercard from '../pages/flowersbunches/flowercard'

import Foodgrains from'../pages/Foodgrains/Food'
import Foodcard from'../pages/Foodgrains/foodcard'

import AttaFloursSooji from'../pages/AttaFloursSooji/atta'
import Attacard from'../pages/AttaFloursSooji/attacard'

import DalsPulses from'../pages/DalsPulses/dals'
import Dalscard from '../pages/DalsPulses/Dalscard'

import DryFruits from'../pages/DryFruits/dry' 
import Drycard from'../pages/DryFruits/drycard' 

import riceproducts from '../pages/riceproduct/rice'
import Ricecard from '../pages/riceproduct/Ricecard'

import edibleoil from '../pages/EdibleOil/edible'
import ediblecard from '../pages/EdibleOil/Ediblecard'

import masala from '../pages/MasalaSpicy/masala'
import Masalacard from '../pages/MasalaSpicy/masalacard'

import Beverages from'../pages/Beverages/beveragenew'
import Bevcard from '../pages/Beverages/Beveragecard'

import Coffee from'../pages/Coffee/cofeenew'
import Coffeecard from'../pages/Coffee/cofeecard'

import EnergySoftDrinks from'../pages/EnergySoftDrinks/energy'
import Energycard from'../pages/EnergySoftDrinks/energycard'

import FruitJuicesDrinks  from'../pages/FruitJuicesDrinks/drinks.js'
import Drinkcard from '../pages/FruitJuicesDrinks/drinkcard'

import tea from '../pages/Tea/tea'
import Teacard from '../pages/Tea/teacard'

import water from '../pages/Water/water'
import Watercard from '../pages/Water/watercard'

import health from '../pages/HealthDrink/health'
import Healthcard from '../pages/HealthDrink/healthcard'

import BakeryCakesDairy from'../pages/BakeryCakesDairy/bakery'
import Bcdcard from '../pages/BakeryCakesDairy/bcdcard'

import BakerySnacks from'../pages/BakerySnacks/bakerysnack'
import bsnackcard from '../pages/BakerySnacks/bsnackcard'

import BreadsBuns from'../pages/BreadsBuns/bread'
import Breadcard from '../pages/BreadsBuns/breadcard'

import CakesPastries from'../pages/CakesPastries/cakes'
import Cakecard from'../pages/CakesPastries/cakecard'

import rusks from '../pages/cookiesrusks/rusk'
import Ruskcard from '../pages/cookiesrusks/ruskcard'

import Diarycard from '../pages/Diary/diarycard'
import diary from '../pages/Diary/diary'

import gourmet from '../pages/GourmetBreads/breads'
import breadcard from '../pages/GourmetBreads/breadcard'

import biscuit from '../pages/BiscuitsCookie/cookie'
import biscuitcard from '../pages/BiscuitsCookie/cookiecard'

import SnacksBrandedFoods from '../pages/SnacksBrandedFoods/snacks'
import Snackcard from '../pages/SnacksBrandedFoods/snackcard'
class Routes extends Component{
    render() {
        return(
            <Router>
            <div>
             <Header/>
            </div>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/triv" component={Triv}/>
            <Route  exact path="/FVeg" component={FV}/>

            <Route  path="/vegetable" component={vegetable}/> 
            <Route path="/Vegcard/:id" component={Vegcard}/>

            <Route path="/Herbs" component={Herbs}/>
            <Route path="/Herbcard/:id" component={Herbcard}/>

            <Route  path="/Freshfruits" component={Freshfruits}/>
             <Route path="/Fruitcard/:id" component={Fruitcard}/>

             <Route  path="/ExoticFruitsVeggs" component={ExoticFruitsVeggs}/>
             <Route path="/Exoticcard/:id" component={Exoticcard}/>

             <Route path="/Organic" component={Organic}/>
             <Route path="/Organiccard/:id" component={Organiccard}/>

             <Route  path="/CutsSpouts" component={CutsSpouts}/>
             <Route path="/Cutcard/:id" component={Cutcard}/>

             <Route path="/flowers" component={flowers}/>
             <Route path="/Flowercard/:id" component={Flowercard}/>

             <Route  path="/Foodgrains" component={Foodgrains}/>
             <Route path="/Foodcard/:id" component={Foodcard}/>

             <Route  path="/AttaFloursSooji" component={AttaFloursSooji}/>
             <Route path="/Attacard/:id" component={Attacard}/>

             <Route  path="/DalsPulses" component={DalsPulses}/>
             <Route path="/Dalscard/:id" component={Dalscard}/>

             <Route  path="/DryFruits" component={DryFruits}/>
             <Route path="/Drycard/:id" component={Drycard}/>

             <Route  path="/riceproducts" component={riceproducts}/>
             <Route path="/Ricecard/:id" component={Ricecard}/>

             <Route  path="/edibleoil" component={edibleoil}/>
             <Route path="/ediblecard/:id" component={ediblecard}/>


             <Route  path="/masala" component={masala}/>
             <Route path="/Masalacard/:id" component={Masalacard}/>

             <Route  path="/Beverages" component={Beverages}/> 
             <Route path="/Bevcard/:id" component={Bevcard}/>

             <Route  path="/Coffee" component={Coffee}/> 
             <Route path="/Coffeecard/:id" component={Coffeecard}/>

             <Route  path="/EnergySoftDrinks" component={EnergySoftDrinks}/>
             <Route path="/Energycard/:id" component={Energycard}/>

             <Route  path="/FruitJuicesDrinks" component={FruitJuicesDrinks}/>
             <Route path="/Drinkcard/:id" component={Drinkcard}/>

             <Route  path="/tea" component={tea}/>
            <Route path="/Teacard/:id" component={Teacard}/>

            <Route  path="/water" component={water}/>
            <Route path="/Watercard/:id" component={Watercard}/>

            <Route  path="/health" component={health}/>
            <Route path="/Healthcard/:id" component={Healthcard}/>

            <Route  path="/BakeryCakesDairy" component={BakeryCakesDairy}/>
             <Route path="/Bcdcard/:id" component={Bcdcard}/>

             <Route  path="/BakerySnacks" component={BakerySnacks}/>
             <Route path="/bsnackcard/:id" component={bsnackcard}/>

             <Route  path="/BreadsBuns" component={BreadsBuns}/> 
             <Route path="/breadcard/:id" component={breadcard}/>

             <Route  path="/CakesPastries" component={CakesPastries}/>
             <Route path="/Cakecard/:id" component={Cakecard}/>

             <Route  path="/rusks" component={rusks}/>
            <Route path="/Ruskcard/:id" component={Ruskcard}/>

            <Route  path="/diary" component={diary}/>
            <Route path="/Diarycard/:id" component={Diarycard}/>

            <Route  path="/gourmet" component={gourmet}/>
            <Route path="/Breadcard/:id" component={Breadcard}/>

            <Route  path="/biscuit" component={biscuit}/>
            <Route path="/biscuitcard/:id" component={biscuitcard}/>

            <Route  path="/SnacksBrandedFoods" component={SnacksBrandedFoods}/>
            <Route path="/Snackcard/:id" component={Snackcard}/>
            
              <Route  exact path="/Dmstar" component={Dmstar}/>
            <Route  exact path="/Offer" component={Offer}/>
            <Route  exact path="/BeautyHygiene" component={BeautyHygiene}/>

            <Route  exact path="/CleanHousehold" component={CleanHousehold}/>
            <Route  path="/Allpurpose" component={Allpurpose}/>
            <Route  path="/Bins" component={Bins}/>
            <Route  path="/Car" component={Car}/>
            <Route  path="/Detergents" component={Detergents}/>
            <Route  path="/Disposables" component={Disposables}/>
            <Route  path="/Fresheners" component={Fresheners}/>
            <Route  path="/Mops" component={Mops}/>
            <Route  path="/Party" component={Party}/>
            <Route  path="/Pooja" component={Pooja}/>
            <Route  path="/Stationery" component={Stationery}/>
            <Route path="/AllpurposeCard/:id" component={AllpurposeCard}/>
            <Route path="/DetergentsCard/:id" component={DetergentsCard}/>
            <Route path="/DisposablesCard/:id" component={DisposablesCard}/>
            <Route path="/FreshenersCard/:id" component={FreshenersCard}/>
            <Route path="/MopsCard/:id" component={MopsCard}/>
            <Route path="/PoojaCard/:id" component={PoojaCard}/>
            <Route path="/StationeryCard/:id" component={StationeryCard}/>
            <Route path="/BinsCard/:id" component={BinsCard}/>
            <Route path="/PartyCard/:id" component={PartyCard}/>
            <Route path="/CarCard/:id" component={CarCard}/>
            <Route path="/CleanHouseholdCard/:id" component={CleanHouseholdCard}/>

            <Route  exact path="/KitchenGarden" component={KitchenGarden}/>
            <Route path="/Appliances" component={Appliances}/>
            <Route path="/Bakeware" component={Bakeware}/>
            <Route path="/Cookware" component={Cookware}/>
            <Route path="/Crockery" component={Crockery}/>
            <Route path="/Flask" component={Flask}/>
            <Route path="/Gardening" component={Gardening}/>
            <Route path="/Kitchen" component={Kitchen}/>
            <Route path="/Pet" component={Pet}/>
            <Route path="/Steel" component={Steel}/>
            <Route path="/Storage" component={Storage}/>
            <Route path="/AppliancesCard/:id" component={AppliancesCard}/>
            <Route path="/PetCard/:id" component={PetCard}/>
            <Route path="/CookwareCard/:id" component={CookwareCard}/>
            <Route path="/KitchenAcceCard/:id" component={KitchenAcceCard}/>
            <Route path="/Gardeningcard/:id" component={Gardeningcard}/>
            <Route path="/SteelCard/:id" component={SteelCard}/>
            <Route path="/BakewareCard/:id" component={BakewareCard}/>
            <Route path="/CrockeryCard/:id" component={CrockeryCard}/>
            <Route path="/FlaskCard/:id" component={FlaskCard}/>
            <Route path="/StorageCard/:id" component={StorageCard}/>
            <Route path="/KitchenGardenCard/:id" component={KitchenGardenCard}/>

            <Route  exact path="/EggsMeatFish" component={EggsMeatFish}/> 
            <Route  path="/Eggs" component={Eggs}/> 
            <Route  path="/Fish" component={Fish}/> 
            <Route  path="/Marinades" component={Marinades}/> 
            <Route  path="/Mutton" component={Mutton}/> 
            <Route  path="/Pork" component={Pork}/> 
            <Route  path="/Poultry" component={Poultry}/> 
            <Route  path="/Sausages" component={Sausages}/> 
            <Route path="/CardEggsmeat/:id" component={CardEggsmeat}/>
            <Route path="/CardEggs/:id" component={CardEggs}/>
            <Route path="/CardFish/:id" component={CardFish}/>
            <Route path="/CardMarinades/:id" component={CardMarinades}/>
            <Route path="/CardMutton/:id" component={CardMutton}/>
            <Route path="/CardPork/:id" component={CardPork}/>
            <Route path="/CardPoultry/:id" component={CardPoultry}/>
            <Route path="/CardSausages/:id" component={CardSausages}/>

            <Route  exact path="/GourmetWorldFood" component={GourmetWorldFood}/> 
            <Route  path="/Cereals" component={Cereals}/>
            <Route  path="/Chocolates" component={Chocolates}/>
            <Route  path="/Cooking" component={Cooking}/>
           <Route  path="/Drinks" component={Drinks}/>
            <Route  path="/Oils" component={Oils}/>
            <Route  path="/Pasta" component={Pasta}/>
            <Route  path="/Sauces" component={Sauces}/>
            <Route  path="/Snacks" component={Snacks}/>
            <Route  path="/Tinned" component={Tinned}/>
            <Route  path="/CardGourmet/:id" component={CardGourmet}/>
            <Route  path="/CardCereals/:id" component={CardCereals}/>
            <Route  path="/CardChocolates/:id" component={CardChocolates}/>
            <Route  path="/CardCooking/:id" component={CardCooking}/>
            <Route  path="/CardDairy/:id" component={CardDairy}/>
            <Route  path="/CardDrinks/:id" component={CardDrinks}/>
            <Route  path="/CardOils/:id" component={CardOils}/>
            <Route  path="/CardPasta/:id" component={CardPasta}/>
            <Route  path="/CardSauces/:id" component={CardSauces}/>
            <Route  path="/CardSnacks/:id" component={CardSnacks}/>
            <Route  path="/CardTinned/:id" component={CardTinned}/>

            <Route  exact path="/BabyCare" component={BabyCare}/>
            <Route  path="/BabyAccessories" component={BabyAccessories}/>
            <Route  path="/Babybath" component={Babybath}/>
            <Route  path="/Babyfood" component={Babyfood}/>
            <Route  path="/Diapers" component={Diapers}/>
            <Route  path="/Feeding" component={Feeding}/>
            <Route  path="/Mothers" component={Mothers}/>
            <Route  path="/CardBabycare/:id" component={CardBabycare}/>
            <Route  path="/CardBabyaccess/:id" component={CardBabyaccess}/>
            <Route  path="/CardBabybath/:id" component={CardBabybath}/>
            <Route  path="/CardBabyfood/:id" component={CardBabyfood}/>
            <Route  path="/CardDiapers/:id" component={CardDiapers}/>
            <Route  path="/CardFeeding/:id" component={CardFeeding}/>
            <Route  path="/CardMothers/:id" component={CardMothers}/>

            <Route  exact path="/ViewAll" component={ViewAll}/>
            <Route exact path="/onion" component={onion}/>
            <Route exact path="/anar/:id" component={anar}/>
            <Route exact path="/banana" component={banana}/>
            <Route exact path="/carrot" component={carrot}/>
            <Route exact path="/grapes" component={grapes}/>
            <Route exact path="/mosambi" component={mosambi}/>
            <Route exact path="/orange" component={orange}/>
            <Route exact path="/potato" component={potato}/>
            <Route exact path="/capsicum" component={capsicum}/>
            <Route exact path="/Freshveg" component={Freshveg}/>
           
            <Route exact path="/Amul" component={Amul}/>
            <Route exact path="/Bourn" component={Bourn}/>
            <Route exact path="/Beautycard/:id" component={Beautycard}/>
            <Route exact path="/Cleancard" component={Cleancard}/>
            <Route exact path="/Kitchencard" component={Kitchencard}/>
            
            <Route  exact path="/Bank1" component={Bank1}/>  

             <Route  exact path="/Makeup" component={Makeup}/>   
            <Route  exact path="/FeminineHygiene" component={FeminineHygiene}/>
            <Route  exact path="/OralCare" component={OralCare}/>
            <Route  exact path="/BathandHandWash" component={BathandHandWash}/>
            <Route  exact path="/HealthandMedicine" component={HealthandMedicine}/>
            <Route  exact path="/HairCare" component={HairCare }/>
            <Route  exact path="/MensGrooming" component={MensGrooming}/>
            <Route  exact path="/SkinCare" component={SkinCare}/>
            <Route  exact path="/FragrancesandDeos" component={FragrancesandDeos}/>
            <Route exact path="/MakeupCard/:id" component={MakeupCard}/>
            <Route exact path="/FeminineHygieneCard/:id" component={FeminineHygieneCard}/>
            <Route exact path="/BathandHandWashCard/:id" component={BathandHandWashCard}/>
            <Route exact path="/OralCareCard/:id" component={OralCareCard}/>
            <Route exact path="/HealthandMedicineCard/:id" component={HealthandMedicineCard}/>
            <Route exact path="/HairCareCard/:id" component={HairCareCard}/>
            <Route exact path="/MensGroomingCard/:id" component={MensGroomingCard}/>
            <Route exact path="/SkinCareCard/:id" component={SkinCareCard}/>
            <Route exact path="/FragrancesandDeosCard/:id" component={FragrancesandDeosCard}/>  
          </Switch>
          <div>
          <Footer/>
          </div>
          </Router>
        );
        }
}
export default Routes;