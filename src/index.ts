export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item> = []) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      this.updateItemQuality(item);
    }

    return this.items;
  }

  private updateItemQuality(item: Item) {
    if (item.name === "Aged Brie") {
      this.updateAgedBrie(item);
    } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      this.updateBackstagePasses(item);
    } else if (item.name === "Sulfuras, Hand of Ragnaros") {
    } else {
      this.updateNormalItem(item);
    }

    item.sellIn--;
  }

  private updateAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  private updateBackstagePasses(item: Item) {
    if (item.quality < 50) {
      item.quality++;
      if (item.sellIn < 11) {
        if (item.quality < 50) {
          item.quality++;
        }
      }
      if (item.sellIn < 6) {
        if (item.quality < 50) {
          item.quality++;
        }
      }
    }
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  private updateNormalItem(item: Item) {
    if (item.quality > 0) {
      item.quality--;
    }
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality--;
    }
  }
}
