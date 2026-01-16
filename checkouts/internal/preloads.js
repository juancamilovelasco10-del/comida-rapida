
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.B8dDYkDA.js","/cdn/shopifycloud/checkout-web/assets/c1/app.Cg4_HhP3.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-es.z5PSX7yi.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.C91EhugT.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.CXi4EAhZ.js","/cdn/shopifycloud/checkout-web/assets/c1/NumberField.C4iRvbFI.js","/cdn/shopifycloud/checkout-web/assets/c1/useShowShopPayOptin.D1ZUzQGU.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.DI8XxzGD.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.CRWG5pgO.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.DdHM7RpN.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.D-kus5rI.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup.DoDzG97h.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.LZXg1b1n.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.Bh3WIUqN.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.qS9vPeAC.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressManager.nNb9rsmh.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayQuery.DWfCpf5-.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.AZ2b6bZh.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.D87nqu2x.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.Bev2O7aG.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.D_0Nyg8i.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch.rF-WSVQa.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger.DChz0ZCi.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-js-index.bYai6Le1.js","/cdn/shopifycloud/checkout-web/assets/c1/v4.BKrj-4V8.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.bFSSA6Js.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.Bbt-2IKJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalizationExtensionField.Ca9titpM.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalPickup.Dm9JB4kF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayVerificationSwitch.WW3cs_z5.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NumberField.CRpcZnVJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0961/4924/2163/files/Copy_of_Copy_of_Copy_of_Copy_of_Copy_of_PLANIFICA_COCINA_Y_CONGELA_FACIL_Your_Story_4_x320.png?v=1761320281"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  