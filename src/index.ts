export class Item {
  constructor(public name: string, public sellIn: number, public quality: number) { }
}

export class GildedRose {
  constructor(public items: Item[] = []) { }

  updateQuality() {
    for (const item of this.items) {
      this.updateItemQuality(item);
      item.sellIn--;
    }

    return this.items;
  }

  private updateItemQuality(item: Item) {
    switch (item.name) {
      case "Aged Brie":
        this.updateAgedBrie(item);
        break;
      case "Backstage passes to a TAFKAL80ETC concert":
        this.updateBackstagePasses(item);
        break;
      case "Sulfuras, Hand of Ragnaros":
        // Nothing to do for Sulfuras
        break;
      default:
        this.updateNormalItem(item);
        break;
    }
  }

  private updateAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  private updateBackstagePasses(item: Item) {
    if (item.quality < 50) {
      item.quality++;
      if (item.sellIn < 11 && item.quality < 50) {
        item.quality++;
      }
      if (item.sellIn < 6 && item.quality < 50) {
        item.quality++;
      }
    }
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  private updateNormalItem(item: Item) {
    if (item.quality > 0) {
      item.quality--;
      if (item.sellIn < 0 && item.quality > 0) {
        item.quality--;
      }
    }
  }
}
