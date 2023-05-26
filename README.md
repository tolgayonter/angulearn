# angulearn

welcome to [angulearn](https://angulearn.vercel.app), a one-stop hub where I've turned my Angular learning path into a repository.

<br>

This repository is more than a code dump; It is a manifest of learning, struggle and somewhat structured chaos. Each project started as an easy application and ended up functioning as a stand-alone micro-frontend that was hosted by a single shell application. And to be quite honest, the latter one is a bit tricky. There were numerous "Aha!" and "Oh, why?!" moments.

<br>

## explore the projects

<pre>
<a href="https://angulearn.vercel.app">angulearn/</a>
│
├─── projects/
│   │
│   ├─── <a href="https://angulearn-passwords.vercel.app">passwords/</a>
│   │   ├── src/
│   │   │   └─── app/
│   │   │       └─── app.module.ts
│   │
│   ├─── <a href="https://angulearn-cards.vercel.app">cards/</a>
│   ├─── <a href="https://angulearn-pipes.vercel.app">pipes/</a>
│   ├─── <a href="https://angulearn-pages.vercel.app">pages/</a>
│   ├─── <a href="https://angulearn-searches.vercel.app">searches/</a>
│   ├─── <a href="https://angulearn-photos.vercel.app">photos/</a>
│   ├─── <a href="https://angulearn-credits.vercel.app">credits/</a>
│   │
│   │
│   ├─── <a href="https://angulearn-shell.vercel.app">shell/</a>
│   │   ├── src/
│   │   │   └─── app/
│   │   │       └─── app.module.ts
│   │
│   │
│   ├─── <a href="https://angulearn-emails.vercel.app">emails/</a>
│   └─── <a href="https://angulearn-comps.vercel.app">comps/</a>
</pre>

<br>

## the struggle

When we type `ng serve` in terminal, it starts the whole Angular magic. First off `webpack` comes in play, and starts by looking at the `main.ts` file, which is the entry point of our applications. `main.ts` usually contains a call to the `platformBrowserDynamic().bootstrapModule(AppModule)` method. This method call kickstarts the bootstrapping process of the Angular application. `platformBrowserDynamic` specifies that the application should run in a browser environment, and `bootstrapModule(AppModule)` tells Angular to bootstrap the application with `AppModule` as the root module. The `AppModule` is where we declare components, pipes, directives, and other modules that our application will use. The `@NgModule` decorator defines this metadata, telling Angular how to compile and run the application. Then Angular loads `AppComponent` first, as defined in the `bootstrap` part. This component hosts the view for the entire application with the corresponding `.html`, `.css`, and `.ts` files. Angular then compiles all of them (and all its childs) into JavaScript code (aka Angular's ahead-of-time compilation). Once the application is bootstrapped, and all components are compiled, Angular's runtime takes over. Takes the JavaScript code, and injects it into the DOM, replacing the `app-root` selector (which is usually `index.html` file) with the rendered `AppComponent`. Finally, application is up and running on our local machine, ready to be interacted with.

<br>

But here's the deal, we can't have more than one entry points. As the name implies, it is a single point. So then, how can we make our ready-to-go applications work together as the pieces of a puzzle? There comes micro-frontend pattern. It is a solution to de-compose, and route independently deployable frontend applications. I've used [@angular-architects/module-federation](https://www.npmjs.com/package/@angular-architects/module-federation) package to ease my way into this impossible otherwise task. After some configuration, and such, we have our shell application that is ready to launch all other microfrontends.

<br>

With this setup, when we start our application using `ng serve`, again Angular compiles it as I've explained before. Nothing fancy here. However, now what happens is, when our application encounters a federated module, it does not try to compile it. Instead, it leaves a placeholder in the compiled code, indicating where the federated module will be loaded from at runtime. When the application runs and a route that uses a federated module is activated, Angular will load the federated module over the network from the URL specified in the `remoteEntry`. This is done dynamically at runtime. Once the federated module is loaded, Angular bootstraps it just like it would bootstrap a local module. It reads the `NgModule` metadata, compiles the components, runs the providers, etc. Perfect so far. And, when used in standalone mode, the federated modules are not loaded from another application. Instead, the application bootstraps normally and loads its own modules.

<br>

But the problem is, this only works if dynamically loaded modules, are not `AppModule`'s. It's not the naming that matters here, but the modules imported by the `AppModule`. In my case, all my apps have `AppModules`, each of which is essential. And in these `AppModule`'s we import the `BrowserModule`. It's a deal-breaker because there should only be one `BrowserModule` imported in a running Angular application. In the case of the microfrontend pattern there's usually a separate module in the app that is called via the shell or boot module. But of course I wasn't aware of this when I was building my apps. And after some research, I realized that this problem is not that popular. I didn't want to replace the entire single module dependant build, which was one of the solutions. So, after a bit of thought, some trials, and errors, I found a fix. It will seem super straightforward, but isn't it always like that?

<br>

```Typescript
@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
})
export class AppSharedModule {
  static forRoot(): ModuleWithProviders<AppSharedModule> {
    return {
      ngModule: AppSharedModule,
      providers: [],
    };
  }
}

@NgModule({
  imports: [BrowserModule, AppSharedModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

<br>

I transformed `AppModule` into what I called `AppSharedModule`. Which is in a sense, equivalent to creating a seperate module. I then remove all of the boot logic from it, and place it in the `AppModule`. I then made `AppSharedModule` accessible with a static `.forRoot()` function, and import it. This is among other options, in my opinion, a genuinely cool technique. And with a bit of speed coding I was able to run my apps both standalone and as a micro frontend.

<br>

I think I learned a lot trying to do this. To be honest there are some limitations or even annoying parts (e.g. applying consistent styles, dynamic routing etc), but in the end I am happy with the result. I know I can build more advanced stuff on top of it, so... stay tuned.
