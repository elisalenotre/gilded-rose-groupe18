import { Item, GildedRose } from "./index";

describe("GildedRose", () => {
    it("should update item quality correctly", () => {
        // GIVEN
        const items: Item[] = [
            new Item("Normal Item", 10, 20),
            new Item("Aged Brie", 2, 0),
            new Item("Sulfuras, Hand of Ragnaros", 0, 80),
            new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
        ];

        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].quality).toEqual(19); // Normal Item
        expect(items[1].quality).toEqual(1);  // Aged Brie
        expect(items[2].quality).toEqual(80); // Sulfuras
        expect(items[3].quality).toEqual(21); // Backstage passes
        expect(items[4].quality).toEqual(50); // Backstage passes
        expect(items[5].quality).toEqual(50); // Backstage passes
    });

    it("should decrease sellIn value for all items except Sulfuras", () => {
        // GIVEN
        const items: Item[] = [
            new Item("Normal Item", 10, 20),
            new Item("Aged Brie", 2, 0),
            new Item("Sulfuras, Hand of Ragnaros", 0, 80),
            new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
        ];

        const gildedRose = new GildedRose(items);

        // WHEN
        gildedRose.updateQuality();

        // THEN
        expect(items[0].sellIn).toEqual(9);  // Normal Item
        expect(items[1].sellIn).toEqual(1);  // Aged Brie
        expect(items[2].sellIn).toEqual(-1);  // Sulfuras
        expect(items[3].sellIn).toEqual(14); // Backstage passes
    });
});
