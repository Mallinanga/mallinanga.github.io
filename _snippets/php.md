---
date: '2017-03-18T15:28:38.295+00:00'
title: PHP
---
```php
<?php
class TheSite extends Site
{

    function __construct()
    {
        add_filter('timber_context', [$this, 'addToContext']);
        add_filter('get_twig', [$this, 'addToTwig']);
        add_action('init', [$this, 'registerPostTypes']);
        $this->setupCache();
        parent::__construct();
    }
}
```
```php
<?php
use Timber\Loader;
use Timber\Menu;
use Timber\Site;
use Timber\Timber;

class TheSite extends Site
{

    function __construct()
    {
        add_filter('timber_context', [$this, 'addToContext']);
        add_filter('get_twig', [$this, 'addToTwig']);
        add_action('init', [$this, 'registerPostTypes']);
        $this->setupCache();
        parent::__construct();
    }

    function setupCache()
    {
        Timber::$cache = false;
        if (defined('WP_ENV') && 'production' === WP_ENV) {
            Timber::$cache = true;
            add_filter('timber/cache/mode', function ($cacheMode) {
                $cacheMode = Loader::CACHE_OBJECT;

                return $cacheMode;
            });
        }
    }

    function registerPostTypes()
    {
        register_extended_post_type('pharmacy', array(
            'show_in_feed' => false,
            'archive'      => array(
                'nopaging' => true,
            ),
            'public'       => false,
            'show_ui'      => true,
            'menu_icon'    => 'dashicons-heart',
            'supports'     => array('title'),
        ), array('singular' => 'Φαρμακείο', 'plural' => 'Φαρμακεία', 'slug' => 'pharmacy',));
    }

    function addToContext($context)
    {
        //$context['settings'] = get_fields('options');
        //$context['menu']     = new Menu('primary');
        if (current_theme_supports('nanga-sidebar')) {
            $context['sidebar'] = Timber::get_sidebar('sidebar.php');
        }
        $context['site'] = $this;

        return $context;
    }

    function addToTwig($twig)
    {
        // $twig->addFilter('antispam', new Twig_Filter_Function([$this, 'antispam']));
        // $twig->addExtension(new \nochso\HtmlCompressTwig\Extension(true));
        $twig->addExtension(new Twig_Extension_StringLoader());

        return $twig;
    }

    function antispam($email)
    {
        return antispambot($email);
    }
}

new TheSite();
```
