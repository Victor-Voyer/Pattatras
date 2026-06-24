# Pattatras — Guide de démarrage

Application web du test technique CPAM. Elle tire des nombres aléatoires entre **1** et **6457**, puis affiche le résultat selon les règles du sujet :

| Condition | Affichage |
|-----------|-----------|
| Multiple de 3 | **Patte** |
| Multiple de 5 | **Tatras** |
| Multiple de 3 et 5 | **Pattatras** |
| Sinon | le nombre tel quel |

Cliquez sur **« Générer 10 nouveaux nombres aléatoires »** pour lancer un nouveau tirage.

---

## Choisir la bonne méthode

| Situation | Méthode recommandée |
|-----------|---------------------|
| Vous avez reçu un **lien internet** | [Méthode 1 — Version en ligne](#méthode-1--version-en-ligne-la-plus-simple) |
| Vous avez reçu une **archive ZIP** | [Méthode 2 — Depuis le ZIP](#méthode-2--depuis-larchive-zip-sur-votre-ordinateur) |

> **En résumé :** si un lien vous a été envoyé, ouvrez-le dans votre navigateur — c’est tout. Le ZIP sert surtout si vous voulez lancer le projet **sur votre machine**, sans passer par internet.

---

## Méthode 1 — Version en ligne (la plus simple)

Aucune installation, aucune connaissance en développement requise.

1. Ouvrez votre navigateur (Chrome, Firefox, Safari ou Edge).
2. Collez l’adresse qui vous a été communiquée, par exemple :
   ```
   https://votre-adresse-de-deploiement.fr
   ```
3. La page **Pattatras** s’affiche. Vous pouvez utiliser l’application immédiatement.

C’est la méthode à privilégier si vous ne souhaitez rien installer.

---

## Méthode 2 — Depuis l’archive ZIP sur votre ordinateur

Cette méthode permet de lancer le projet **en local**. Elle demande deux étapes : décompresser le ZIP, puis démarrer un petit serveur sur votre machine.

> **Pourquoi un serveur ?**  
> Le projet utilise des fichiers JavaScript modernes. Les ouvrir en double-cliquant sur `index.html` ne fonctionne pas de manière fiable dans la plupart des navigateurs. Un mini-serveur local contourne ce problème.

### Étape 1 — Décompresser le ZIP

1. Enregistrez le fichier ZIP reçu (par exemple `TEST-CPAM.zip`) sur votre ordinateur (Bureau ou Téléchargements).
2. **Windows :** clic droit sur le ZIP → **Extraire tout…** → choisissez un dossier (ex. `Bureau\TEST-CPAM`) → **Extraire**.
3. **Mac :** double-cliquez sur le ZIP ; un dossier du même nom apparaît (ex. `TEST-CPAM`).

Vous devez obtenir un dossier contenant notamment :

```
TEST-CPAM/
├── index.html
├── css/
├── js/
├── README.md
└── CONSIGNES.md
```

### Étape 2 — Installer Node.js (une seule fois)

Node.js est un outil gratuit qui permet de lancer le projet localement.

1. Allez sur [https://nodejs.org](https://nodejs.org).
2. Téléchargez la version **LTS** (bouton vert recommandé).
3. Lancez l’installateur et acceptez les options par défaut (**Suivant**, **Installer**, etc.).
4. Redémarrez votre ordinateur si l’installateur le demande.

**Vérifier l’installation**

- **Windows :** menu Démarrer → tapez `cmd` → Entrée. Dans la fenêtre noire, tapez :
  ```text
  node --version
  ```
  Un numéro de version (ex. `v22.x.x`) doit s’afficher.

- **Mac :** ouvrez **Terminal** (Spotlight : Cmd + Espace, tapez « Terminal »). Tapez :
  ```text
  node --version
  ```

Si une erreur apparaît, fermez et rouvrez le terminal, ou réinstallez Node.js.

### Étape 3 — Ouvrir un terminal dans le dossier du projet

Le **terminal** (ou **invite de commandes**) est une fenêtre où l’on tape des commandes texte. Il faut l’ouvrir **dans le dossier** `TEST-CPAM`.

**Windows**

1. Ouvrez l’Explorateur de fichiers et allez dans le dossier `TEST-CPAM`.
2. Cliquez dans la barre d’adresse en haut, tapez `cmd` puis Entrée.  
   Une fenêtre noire s’ouvre déjà positionnée dans le bon dossier.

**Mac**

1. Ouvrez le **Terminal**.
2. Tapez `cd ` (avec un espace à la fin), **sans** appuyer sur Entrée.
3. Glissez-déposez le dossier `TEST-CPAM` dans la fenêtre Terminal : le chemin complet s’écrit tout seul.
4. Appuyez sur Entrée.

### Étape 4 — Lancer le projet

Dans le terminal, tapez exactement :

```text
npx serve .
```

- À la première utilisation, on peut vous demander d’installer `serve` : tapez `y` puis Entrée.
- Attendez quelques secondes. Des lignes du type suivant s’affichent :

  ```text
  Serving!
  Local:   http://localhost:3000
  ```

**Note :** le port peut être `3000`, `5000` ou un autre numéro — utilisez l’adresse **Local** indiquée à l’écran.

### Étape 5 — Ouvrir l’application dans le navigateur

1. Copiez l’adresse **Local** (ex. `http://localhost:3000`).
2. Collez-la dans la barre d’adresse de Chrome, Firefox ou Safari.
3. La page **Pattatras** s’affiche.

### Étape 6 — Arrêter le serveur

Quand vous avez terminé :

1. Revenez à la fenêtre du terminal.
2. Appuyez sur **Ctrl + C** (Windows et Mac).
3. Vous pouvez fermer le terminal.

Le site ne sera plus accessible tant que vous n’aurez pas relancé `npx serve .` (étape 4).

---

## Utilisation de l’application

1. Au chargement, **10 nombres aléatoires** sont déjà affichés dans le tableau.
2. La colonne **Nombre tiré** montre le nombre généré.
3. La colonne **Résultats** montre **Patte**, **Tatras**, **Pattatras** ou le nombre brut.
4. Cliquez sur **« Générer 10 nouveaux nombres aléatoires »** pour un nouveau lot.

Les consignes détaillées du sujet sont aussi disponibles dans le fichier `CONSIGNES.md`.

---

## Problèmes fréquents

### « La page reste blanche » ou « Erreur dans la console »

- Vous avez probablement ouvert `index.html` en double-cliquant dessus.  
  **Solution :** utilisez la [méthode 2](#méthode-2--depuis-larchive-zip-sur-votre-ordinateur) avec `npx serve .`, ou la [version en ligne](#méthode-1--version-en-ligne-la-plus-simple).

### « `npx` n’est pas reconnu » ou « `node` n’est pas reconnu »

- Node.js n’est pas installé ou le terminal n’a pas été rouvert après l’installation.  
  **Solution :** installez Node.js (étape 2), redémarrez le terminal, réessayez.

### « Port already in use » (port déjà utilisé)

- Un autre programme utilise le même port.  
  **Solution :** fermez les autres terminaux où `serve` tourne encore, ou utilisez l’autre adresse **Local** proposée par la commande.

### Le navigateur ne se connecte pas à `localhost`

- Vérifiez que le terminal affiche toujours **Serving!** et que vous n’avez pas fermé la fenêtre.
- Vérifiez que l’adresse copiée correspond bien à celle affichée (y compris le numéro de port).

---

## Structure du projet (information)

| Fichier / dossier | Rôle |
|-------------------|------|
| `index.html` | Page principale |
| `css/styles.css` | Mise en forme visuelle |
| `js/pattatras.js` | Logique des règles Patte / Tatras / Pattatras |
| `js/app.js` | Affichage du tableau et du bouton |
| `CONSIGNES.md` | Énoncé complet du test |
| `README.md` | Ce guide |

---

## Besoin d’aide ?

En cas de blocage, indiquez :

- votre système (**Windows** ou **Mac**),
- la méthode utilisée (**lien en ligne** ou **ZIP local**),
- le message d’erreur exact (copier-coller ou capture d’écran),
- à quelle étape vous êtes bloqué.

---

**Auteur :** Victor VOYER — Test technique CPAM
