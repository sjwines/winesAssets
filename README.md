# Wine's Asset Pack

This is an asset pack for MakeCode Arcade containing various game sprites including drones, ships, and other game assets.

> Open this page at [https://sjwines.github.io/winesAssets/](https://sjwines.github.io/winesAssets/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/sjwines/winesAssets** and import

## Available Images

Once imported, you can use the following images in your code:
- `myImages.drone1`, `myImages.drone2`, `myImages.drone3`, `myImages.drone4`, `myImages.drone5`
- `myImages.ship1`, `myImages.ship2`, `myImages.ship3`
- `myImages.sonarBuoy`
- `myImages.shipData`
- And many more!

## Example Usage

```typescript
// Create a sprite using one of the drone images
let mySprite = sprites.create(myImages.drone1, SpriteKind.Player)

// Position the sprite in the center of the screen
mySprite.setPosition(80, 60)

// Set up movement controls
controller.moveSprite(mySprite)
```

## Edit this project

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/sjwines/winesAssets** and click import

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
