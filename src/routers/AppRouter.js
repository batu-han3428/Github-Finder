import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Nav = () => (
    // <nav>
    //     <Link to="/">Home</Link>|
    //     <Link to="/contact">Contact</Link>|
    //     <Link to="/product">Product</Link>|
    // </nav>

    <nav>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>|{/*navlinkin linkten farkı active özelliği ekleyebilmemiz. css dosyamızda tanımladığımız classın adını activeClassName attribute une veriyoruz. exact yapıyoruz ki içinde to kısmında olanlanlara active vermesin. tam eşleşme olduğunda versin. yoksa home hep active olarak kalır*/}
        <NavLink to="/contact#email" activeClassName="active">Contact</NavLink>|
        <NavLink exact to="/products" activeClassName="active">Products</NavLink>|
        <NavLink to="/products/12?orderby=price" activeClassName="active">Product Details</NavLink>
    </nav>
);

const Header = () => (
    <header>
        <h1>Github Finder</h1>
    </header>
);
const HomePage = () => (
    <div>Home Page</div>
);
const ContactPage = (props) => {
    console.log(props);
    return (
        <>
    <div>Contact Page</div>
    <div>{props.location.hash}</div>
        </>
    )
};
const ProductsPage = () => (
    <div>Products Page</div>
);
const ProductsDetailsPage = (props) => {
    console.log(props);
    return (
        <>
            <div>Products Details Page</div>
            <div>{props.match.params.id}</div>
            <div>{props.location.search}</div>
        </>
    )
};
const NotFoundPage = () => (
    <div>Not Found Page</div>
);

const AppRouter = () => (
    <BrowserRouter>
        <Header/>
        <Nav/>
        <Switch>
            <Route exact path="/" component={HomePage}/>{/* url de domainden sonra girilen link pathe uyuyorsa component attribute in de adını verdiğimiz component çağırılır */}
            <Route path="/contact" component={ContactPage}/>
            <Route exact path="/products" component={ProductsPage}/>
            <Route path="/products/:id" component={ProductsDetailsPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);

export default AppRouter