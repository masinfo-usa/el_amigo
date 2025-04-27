import React from "react";
import { Box, Typography } from "@mui/material";

const menuData = [
  {
    title: "TACOS",
    color: "red",
    items: [
      "ASADA (Grilled Steak) - $3.00",
      "AL PASTOR (Marinated Pork) - $3.00",
      "CHORIZO (Ground Mexican Sausage) - $3.00",
      "TRIPA - $3.75",
      "CARNITAS (Pulled Pork) - $3.00",
      "LENGUA (Beef Tongue) - $3.75",
      "POLLO (Chicken) - $3.00",
      "BARBACOA (BBQ Beef) - $3.00",
      "CABEZA (Beef Head) - $3.00",
      "CHICHARRON - $3.00",
      "CAMPECHANO (Chorizo + Steak) - $3.75",
      "SUIZO (Grilled Cheese + Meat) - $3.75",
      "PESCADO (Fish) (3) - $10.99",
      "CAMARON (Shrimp) (3) - $10.99"
    ]
  },
  {
    title: "TORTAS",
    color: "blue",
    items: [
      "Milanesa de Pollo/Res (Breaded Chicken/Beef) - $12.50",
      "Asada (Grilled Steak) - $12.00",
      "Al Pastor (Marinated Pork) - $12.00",
      "Pollo (Chicken) - $11.00",
      "El Chavo (Ham) - $10.00",
      "Chorizo (Mexican Sausage) - $12.00",
      "Enchilada (Marinated Meat) - $12.00",
      "Salchicha (Sausage) - $10.00",
      "Asada Con Queso (Steak With Cheese) - $13.50",
      "Choriqueso (Mexican Sausage With Cheese) - $13.50",
      "Oaxaqueña (Ham, Oaxaca + American Cheese) - $11.00",
      "Hawaina (Hawaiian Ham, Pineapple, Oaxaca + American Cheese) - $12.00",
      "Cubana (Cuban. Breaded Beef, Sausage, Egg, Chorizo, Ham And Oaxaca Cheese) - $15.00",
    ]
  },
  {
    title: "PLATILLOS / DISHES",
    color: "goldenrod",
    items: [
        "- Con Frijoles, Arroz, Ensalada y 4 Tortillas Hechas A Mano",
        "- With Beans, Rice, Salad & 4 Hand Made Totillas",
        "----------------------------",
      "CARNE DE RES (BEEF)",
      "Asada - $15.99",
      "Encebollada - $15.99",
      "A La Mexicana - $15.99", 
      "Higado Encebollado - $15.99",
      "Milanesa De Res - $15.99",
         "----------------------------",
     "CARNE DE PUERCO (PORK)",
      "Enchilada (Marinated Pork) - $15.99",
      "----------------------------",
      "POLLO (CHICKEN)", 
      "A La Plancha (Grilled) - $14,99", 
      "Adobado (Marinated) - $14.99",
      "Milanesa De Pollo (Breaded Chicken) $15.99", 
      "A La Mexicana (In Creamy Sause) - $15.99", 
      "En Chipotle (In Chipotle Sauce) - $15.99",
      ]
  },
  {
    title: "PLATILLOS / DISHES",
    color: "goldenrod",
    items: [
        "- Con Frijoles, Arroz, Ensalada y 4 Tortillas Hechas A Mano",
        "- With Beans, Rice, Salad & 4 Hand Made Totillas",
         "----------------------------",
      "FAJITAS",
      "Res (Beef) - $15.99",
      "Pollo (Chicken) - $15.99",
      "Mixtas (Steak + Chicken) - $16.99",
      "Texana (Steak, Chicken & Shrimp) - $17.99",
      "",
      "CAMARONES (SHRIMP)", 
      "A La Plancha (Grilled) - $15.99", 
      "En Chipotle (In Chipotle Sauce) - $16.99", 
      "A La Mexicana (Mexican Style) - $15.99",
      "----------------------------",
      "PESCADO (FISH)", 
      "Filete De Pescado (Grilled Fish Filled) - $14.99",
      "Mojarra (Fried Fish) - $16.99",
         "----------------------------",
     "Huevos al Gusto (Eggs Any Style) - $11.99",
      "",
      "*This Item May Be Served Raw Or Undercooked. Consuming Raw Or Undercooked Meats, Poultry, Seafood, Shellfish Or Eggs May Increase Your Risk Of Food Borne Illness.*"
    ]
  },

  {
    title: "GORDITAS",
    color: "olive",
    items: [
        "- Con Lechuga, Tomate, Crema y Queso",
        "- With Lettuce, Tomato, Sour Cream & Cheese",
        "Asada (Grilled Steak) - $4.00",
        "Al Pastor (Marinated Pork) - $4.00",
        "Pollo (Chicken) - $4.00",
        "Barbacoa (BBQ) - $4.00", 
        "Cabeza (Beef Head) - $4.00", 
        "Carnitas (Pulled Pork) - $4.00", 
        "Lengua (Beef Tongue) - $4.00", 
        "Chicharron (Pork Rind) - $4.00", 
        "Vegetariana (Vegetarian) - $3.00", 
      ]
  },
  {
    title: "BURRITOS",
    color: "red",
    items: [
        "- Arroz, Frijoles, Crema y Queso",
        "- Rice, Beans, Sour Cream & Cheese",
      "Pollo (Chicken) - $11.99",
      "Asada (Grilled Steak) - $11.99",
      "Super Burro (Chicken + Steak + Pico De Gallo) - $12.99",
      "Vegetariano (Broccoli, Squash, Red Pepper, Mushrooms & Crumbled Queso Fresco) - $10.49"
    ]
  },
  {
    title: "TAMALES",
    color: "indigo",
    items: [
      "Verde (Chicken w/ Verde Sauce) - $3.00",
      "Mole (Chicken w/ Mole Sauce) - $3.00",
      "Rajas (Slices of Jalapeño W/ Cheese) - $3.00",
      "Elote (Corn) - $3.00",
      "- Extra Toppings/Side Are An Additional Charge"
    ]
  },
 
  {
    title: "SIDES",
    color: "orange",
    items: [
        "ARROZ (Rice): Chico (Small) 8oz - $2.50",
        "ARROZ (Rice): Mediano (Medium) 16oz - $4.50",
        "ARROZ (Rice): Grande (Big) 24oz - $6.50",
        "FRIJOLES (Beans): Chico (Small) 8oz - $2.50",
        "FRIJOLES (Beans): Mediano (Medium) 16oz - $4.50",
        "FRIJOLES (Beans): Grande (Big) 24oz - $6.50",
      "PLATANOS FRITOS (Fried Plantains) - $4.99",
      "ENSALADA (Side Salad) - $3.50",
      "PAPAS FRITAS (French Fries) - $3.50"
    ]
  },
  
  {
    title: "EMPANADAS",
    color: "pink",
    items: [
      "Order of 4 fried empanadas topped w/ lettuce, tomato, sour cream & cheese (Pollo/Queso) (Chicken/cheese) - $12.00",
      
    ]
  },
  {
    title: "CALDOS",
    color: "green",
    items: [
      "Siete Mares (Spicy Seafood Stew) - $16.99",
      "Mariscada (Creamy Seafood Stew) - $17.99",
      "Caldo de Res - $13.99",
      "Menudo - $13.99"
    ]
  },
  {
    title: "ALITAS DE POLLO / CHICKEN WINGS",
    color: "yellow",
    items: ["Buffalo - $10.99", "BBQ - $12.99"]
  },
  {
    title: "NIÑOS / KIDS",
    color: "purple",
    items: ["Chicken Nuggets - $7.99", "Chicken Tenders - $7.99"]
  },
  
  {
    title: "QUESADILLAS [MAIZ/HARINA - CORN/FLOUR]",
    color: "brown",
    items: [
      "Queso (Cheese) - $10.00",
      "Asada (Grilled Steak) - $11.99",
      "Pollo (Chicken) - $11.99",
      "Vegetariana (Broccoli, Squash, Red Pepper, Mushrooms & Cheese) - $10.99"
    ]
  },
  {
    title: "CHILAQUILES",
    color: "teal",
    items: ["Asada (Steak) - $16.00", "Huevo (Eggs) - $13.00", "Mixto (Steak + Eggs) - $21.50"]
  },
   {
    title: "PUPUSAS $4.00 (3 x $10)",
    color: "darkgreen",
    items: [
        " - $4.00 (3 x $10)",
        "Queso (Cheese)",
        "Frijol (Bean), Loroco Revuelta (Pork Rinds + Cheese)", "Pupusa con Carne (With Meat) - $5.00"]
  },
  {
    title: "POSTRE / DESSERT",
    color: "pink",
    items: [
      "Flan - $5.99",
      "Gelatina - $3.50",
      "Tiramisu - $6.50",
      "Fresas con Crema (Strawberries & Cream) - $5.00",
    ]
  },
  
  {
    title: "CHIPS",
    color: "darkblue",
    items: ["Salsa - $3.50", "Queso - $4.50", "Guacamole - $5.49"]
  },
  {
    title: "SOPES",
    color: "indigo",
    items: [
      "- Con Frijoles, Lechuga, Tomate, Crema, Queso y Aguacate",
        "- With Beans, Lettuce, Tomato, Sour Cream, Cheese & Avocado",
        "Carne Al Gusto (Choice of Meat) - $4.25",
      "Vegetariano (Vegetarian) - $3.25",
    ]
  },
  {
    title: "Huaraches",
    color: "indigo",
    items: [
      "- Con Frijoles, Lechuga, Crema y Queso",
      "- With Beans, Lettuce, Sour Cream & Cheese",
      "Carne Al Gusto (Choose Any Meat) - $10.99",
      "Sin Carne (No Meat) - $6.99",
    ]
  },
  {
    title: "SABADOS Y DOMINGO",
    color: "darkred",
    items: [
        "Lb De Carnitas + 10 Tortillas Y 2 Salsas - $15.99",
        "Lb De Barbacoa De Borrego + 8 Totillas - $16.99",
        "Consome + 4 Tortillas - $9.99",
    ]
  },
  {
    title: "OTRAS OPCIONES / OTHER OPTIONS",
    color: "darkred",
    items: [
      "Pambazo - $12.99",
      "Enchiladas Verdes o Rojas (Green or Red Sauce) [4] - $12.99",
      "Entomatadas [4] - $12.00",
      "Tacos Dorados De Pollo (Fried Chicken Taquitos) [5] - $12.99",
      "Chile Relleno (Stuffed Pepper) - $13.99",
      "Tostada de Tinga (Fried Tortilla W/ Chicken) - $3.50"
    ]
  }
];

const Menu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: '#000',
        gap: 2,
        p: 2
      }}
    >
      {menuData.map((section) => (
        <Box
        key={section.title}
        sx={{
          flex: "1 1 300px",
          maxWidth: {xs: '100%', lg:'30%'},
          border: "1px solid #999", // white stroke
          borderRadius: 2,
          p: 2,
          boxShadow: 0,
          backgroundColor: "#000", // card background
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#fe4438", fontWeight: "bold", mb: 1 }}
        >
          {section.title}
        </Typography>
      
        {section.items.map((item, index) => {
          const [name, price] = item.split(" - ");
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 0.5,
              }}
            >
              <Typography variant="body2" sx={{ color: "#fff" }}>
                {name}
              </Typography>
              {price && (
                <Typography variant="body2" sx={{ color: "#84fb8a" }}>
                  ${price.trim().replace("$", "")}
                </Typography>
              )}
            </Box>
          );
        })}
      </Box>
      
      ))}
    </Box>
  );
};

export default Menu;
