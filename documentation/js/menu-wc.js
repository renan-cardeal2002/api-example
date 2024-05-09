'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api-financas documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-5da0a82d73414e5570ad89889299536ea3300d2d650529faf27eb210031b790f775bd4fd03a7ce368eb231fc8cd9c115daceb1580984fd1528a1b0c3d87d30a0"' : 'data-bs-target="#xs-controllers-links-module-AppModule-5da0a82d73414e5570ad89889299536ea3300d2d650529faf27eb210031b790f775bd4fd03a7ce368eb231fc8cd9c115daceb1580984fd1528a1b0c3d87d30a0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5da0a82d73414e5570ad89889299536ea3300d2d650529faf27eb210031b790f775bd4fd03a7ce368eb231fc8cd9c115daceb1580984fd1528a1b0c3d87d30a0"' :
                                            'id="xs-controllers-links-module-AppModule-5da0a82d73414e5570ad89889299536ea3300d2d650529faf27eb210031b790f775bd4fd03a7ce368eb231fc8cd9c115daceb1580984fd1528a1b0c3d87d30a0"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-5da0a82d73414e5570ad89889299536ea3300d2d650529faf27eb210031b790f775bd4fd03a7ce368eb231fc8cd9c115daceb1580984fd1528a1b0c3d87d30a0"' : 'data-bs-target="#xs-injectables-links-module-AppModule-5da0a82d73414e5570ad89889299536ea3300d2d650529faf27eb210031b790f775bd4fd03a7ce368eb231fc8cd9c115daceb1580984fd1528a1b0c3d87d30a0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5da0a82d73414e5570ad89889299536ea3300d2d650529faf27eb210031b790f775bd4fd03a7ce368eb231fc8cd9c115daceb1580984fd1528a1b0c3d87d30a0"' :
                                        'id="xs-injectables-links-module-AppModule-5da0a82d73414e5570ad89889299536ea3300d2d650529faf27eb210031b790f775bd4fd03a7ce368eb231fc8cd9c115daceb1580984fd1528a1b0c3d87d30a0"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-28f39b4c805128b09e96ee54d53eff70e27393d5db2507305a36cfa6d9780728e06ff3a6a74e7491fb734bf1247d880bdf27324dd1e6960fb749ec40f2e9af75"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-28f39b4c805128b09e96ee54d53eff70e27393d5db2507305a36cfa6d9780728e06ff3a6a74e7491fb734bf1247d880bdf27324dd1e6960fb749ec40f2e9af75"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-28f39b4c805128b09e96ee54d53eff70e27393d5db2507305a36cfa6d9780728e06ff3a6a74e7491fb734bf1247d880bdf27324dd1e6960fb749ec40f2e9af75"' :
                                            'id="xs-controllers-links-module-AuthModule-28f39b4c805128b09e96ee54d53eff70e27393d5db2507305a36cfa6d9780728e06ff3a6a74e7491fb734bf1247d880bdf27324dd1e6960fb749ec40f2e9af75"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-28f39b4c805128b09e96ee54d53eff70e27393d5db2507305a36cfa6d9780728e06ff3a6a74e7491fb734bf1247d880bdf27324dd1e6960fb749ec40f2e9af75"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-28f39b4c805128b09e96ee54d53eff70e27393d5db2507305a36cfa6d9780728e06ff3a6a74e7491fb734bf1247d880bdf27324dd1e6960fb749ec40f2e9af75"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-28f39b4c805128b09e96ee54d53eff70e27393d5db2507305a36cfa6d9780728e06ff3a6a74e7491fb734bf1247d880bdf27324dd1e6960fb749ec40f2e9af75"' :
                                        'id="xs-injectables-links-module-AuthModule-28f39b4c805128b09e96ee54d53eff70e27393d5db2507305a36cfa6d9780728e06ff3a6a74e7491fb734bf1247d880bdf27324dd1e6960fb749ec40f2e9af75"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-783fcc0e074df5e819f398b4eadfd7970b62401b3fa30910ffb95ff73dc1d1b8e067d536979a96149b3b7a0a3873c3c065cf7df7e9e740359c448c070a6c3e22"' : 'data-bs-target="#xs-controllers-links-module-UserModule-783fcc0e074df5e819f398b4eadfd7970b62401b3fa30910ffb95ff73dc1d1b8e067d536979a96149b3b7a0a3873c3c065cf7df7e9e740359c448c070a6c3e22"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-783fcc0e074df5e819f398b4eadfd7970b62401b3fa30910ffb95ff73dc1d1b8e067d536979a96149b3b7a0a3873c3c065cf7df7e9e740359c448c070a6c3e22"' :
                                            'id="xs-controllers-links-module-UserModule-783fcc0e074df5e819f398b4eadfd7970b62401b3fa30910ffb95ff73dc1d1b8e067d536979a96149b3b7a0a3873c3c065cf7df7e9e740359c448c070a6c3e22"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-783fcc0e074df5e819f398b4eadfd7970b62401b3fa30910ffb95ff73dc1d1b8e067d536979a96149b3b7a0a3873c3c065cf7df7e9e740359c448c070a6c3e22"' : 'data-bs-target="#xs-injectables-links-module-UserModule-783fcc0e074df5e819f398b4eadfd7970b62401b3fa30910ffb95ff73dc1d1b8e067d536979a96149b3b7a0a3873c3c065cf7df7e9e740359c448c070a6c3e22"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-783fcc0e074df5e819f398b4eadfd7970b62401b3fa30910ffb95ff73dc1d1b8e067d536979a96149b3b7a0a3873c3c065cf7df7e9e740359c448c070a6c3e22"' :
                                        'id="xs-injectables-links-module-UserModule-783fcc0e074df5e819f398b4eadfd7970b62401b3fa30910ffb95ff73dc1d1b8e067d536979a96149b3b7a0a3873c3c065cf7df7e9e740359c448c070a6c3e22"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeRequestMiddleware.html" data-type="entity-link" >TimeRequestMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});