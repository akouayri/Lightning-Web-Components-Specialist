Source for projects in the [Build LWC](https://trailhead.salesforce.com/en/content/learn/trails/build-lightning-web-components) trail.

# Component Hierarchy

This Component Heirarchy relates to the module on [Handling events in LWC](https://trailhead.salesforce.com/en/content/learn/modules/lightning-web-components-basics/handle-events-in-lightning-web-components?trail_id=build-lightning-web-components) and is for the components of the same name as labeled in the image below.

![image](./assets/componentHier.png)

1. `tile` displays data of a single product. Clicking on a `tile`, fires a customEvent which passes the product.Id of the product that is clicked.
1. `list` loops over data.js from the `bikes` export variable and creates multilple `tiles`. `list` also listens for the customEvent from `tile` and passes the the productId to `selector` component through another customEvent.
1. `selector` listens for the customEvent sent by `list` when it receives it, it sets the productID property of the `detail` component.
1. `detail` component uses the productID to find the product details in data.js and displays the relevant product information.
