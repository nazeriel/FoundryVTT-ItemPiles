export default {

	"VERSION": "1.0.0",

	// The actor class type is the type of actor that will be used for the default item pile actor that is created on first item drop.
	"ACTOR_CLASS_TYPE": "npc",

	// The item class type is the type of item that will be used for the default loot item
	"ITEM_CLASS_LOOT_TYPE": "equipment",

	// The item class type is the type of item that will be used for the default weapon item
	"ITEM_CLASS_WEAPON_TYPE": "weapon", 

	// The item class type is the type of item that will be used for the default equipment item
	"ITEM_CLASS_EQUIPMENT_TYPE": "equipment",

	// The item quantity attribute is the path to the attribute on items that denote how many of that item that exists
	"ITEM_QUANTITY_ATTRIBUTE": "system.amount",

	// The item price attribute is the path to the attribute on each item that determine how much it costs
	"ITEM_PRICE_ATTRIBUTE": "system.cost",

	// Item types and the filters actively remove items from the item pile inventory UI that users cannot loot, such as spells, feats, and classes
	"ITEM_FILTERS": [
		{
			"path": "type",
			"filters": "attack,devotion,discipline,effect,fraction,knack,mask,namegiver,skill,spell,spellmatrix,talent"
		}
	],

	// Item similarities determines how item piles detect similarities and differences in the system
	"ITEM_SIMILARITIES": ["name", "type"],

	// Currencies in item piles is a versatile system that can accept actor attributes (a number field on the actor's sheet) or items (actual items in their inventory)
	// In the case of attributes, the path is relative to the "actor.system"
	// In the case of items, it is recommended you export the item with `.toObject()` and strip out any module data
	"CURRENCIES": [
		{
			type: "attribute",
			name: "Merchants",
			img: "systems/ed4e/icons/items/inventory/coin-gold.jpg",
			abbreviation: "{#}M",
			data: {
				path: "system.money.gold",
			},
			primary: false,
			exchangeRate: 10
		},
		{
			type: "attribute",
			name: "Tavs",
			img: "systems/ed4e/icons/items/inventory/coin-silver.jpg",
			abbreviation: "{#}T",
			data: {
				path: "system.money.silver",
			},
			primary: true,
			exchangeRate: 1
		},
		{
			type: "attribute",
			name: "Hammers",
			img: "systems/ed4e/icons/items/inventory/coin-copper.jpg",
			abbreviation: "{#}H",
			data: {
				path: "system.money.copper",
			},
			primary: false,
			exchangeRate: 0.1
		}
	]
};
