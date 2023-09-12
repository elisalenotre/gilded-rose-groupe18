export class Item {
  constructor(public name: string, public sellIn: number, public quality: number) { }
}

const AGED_BRIE = "Aged Brie";
const BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS = "Sulfuras, Hand of Ragnaros";

export class GildedRose {
  constructor(public items: Item[] = []) { }

  updateQuality() {
    for (const item of this.items) {
      this.updateItemQuality(item);
      item.sellIn--;
    }

    return this.items;
  }

  private updateItemQuality = (item: Item) => {
    switch (item.name) {
      case AGED_BRIE:
        this.updateAgedBrie(item);
        break;
      case BACKSTAGE_PASSES:
        this.updateBackstagePasses(item);
        break;
      case SULFURAS:
        break;
      default:
        this.updateNormalItem(item);
        break;
    }
  };

  private increaseQuality(item: Item) {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  private decreaseQuality(item: Item) {
    if (item.quality > 0) {
      item.quality--;
    }
  }

  private updateAgedBrie(item: Item) {
    this.increaseQuality(item);
  }

  private updateBackstagePasses(item: Item) {
    if (item.sellIn < 0) {
      item.quality = 0;
    } else if (item.sellIn < 6) {
      this.increaseQuality(item);
      this.increaseQuality(item);
      this.increaseQuality(item);
    } else if (item.sellIn < 11) {
      this.increaseQuality(item);
      this.increaseQuality(item);
    } else {
      this.increaseQuality(item);
    }
  }

  private updateNormalItem(item: Item) {
    this.decreaseQuality(item);
    if (item.sellIn < 0) {
      this.decreaseQuality(item);
    }
  }
}