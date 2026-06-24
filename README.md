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
| Vous avez un **lien GitHub** | [Méthode 3 — Depuis GitHub](#méthode-3--depuis-github) |

> **En résumé :** si un lien vous a été envoyé, ouvrez-le dans votre navigateur — c’est tout. Le ZIP ou GitHub servent si vous voulez lancer le projet **sur votre machine**, sans passer par internet.

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

## Méthode 3 — Depuis GitHub

**GitHub** est un site web où les développeurs hébergent et partagent du code. Si on vous a envoyé un lien du type `https://github.com/Victor-Voyer/Pattatras`, c’est l’adresse du projet sur GitHub.

Cette méthode permet de récupérer le projet sur votre ordinateur, puis de le lancer localement (comme avec le ZIP).

> **Quelle option choisir ?**
> - **Option A (recommandée)** : télécharger le ZIP depuis GitHub — la plus simple, aucun outil supplémentaire.
> - **Option B** : cloner avec Git — pratique si vous connaissez déjà Git ou si vous devez mettre à jour le projet régulièrement.

### Option A — Télécharger le projet en ZIP (recommandé)

1. Ouvrez le lien GitHub dans votre navigateur, par exemple :
   ```
   https://github.com/Victor-Voyer/Pattatras
   ```
2. Sur la page du projet, cliquez sur le bouton vert **Code** (en haut à droite de la liste des fichiers).
3. Dans le menu qui s’ouvre, choisissez **Download ZIP** (Télécharger le ZIP).
4. Le fichier ZIP se télécharge (souvent dans le dossier **Téléchargements**).
5. **Décompressez le ZIP** comme indiqué dans la [méthode 2, étape 1](#étape-1--décompresser-le-zip) :
   - **Windows :** clic droit → **Extraire tout…**
   - **Mac :** double-cliquez sur le ZIP

   Vous obtenez un dossier du type `Pattatras-main` (le suffixe `-main` est normal : c’est le nom de la branche principale sur GitHub).

6. Poursuivez ensuite à partir de la [méthode 2, étape 2](#étape-2--installer-nodejs-une-seule-fois) :
   - installer Node.js (une seule fois),
   - ouvrir un terminal dans le dossier du projet (`Pattatras-main` ou `Pattatras`),
   - lancer `npx serve .`,
   - ouvrir l’adresse **Local** dans le navigateur.

### Option B — Cloner avec Git (pour utilisateurs un peu à l’aise)

**Git** est un outil qui permet de copier un projet depuis GitHub en une commande, et de le mettre à jour plus tard.

#### Installer Git (une seule fois)

1. Allez sur [https://git-scm.com/downloads](https://git-scm.com/downloads).
2. Téléchargez Git pour **Windows** ou **Mac**.
3. Lancez l’installateur et acceptez les options par défaut.

**Vérifier l’installation**

Dans un terminal (cmd sur Windows, Terminal sur Mac), tapez :

```text
git --version
```

Un numéro de version doit s’afficher (ex. `git version 2.x.x`).

#### Copier le projet depuis GitHub

1. Ouvrez un terminal.
2. Allez dans le dossier où vous voulez stocker le projet. Exemple sur Mac :

   ```text
   cd Desktop
   ```

   Sur Windows, vous pouvez par exemple taper `cd Desktop` ou naviguer vers `Documents`.

3. Copiez le projet avec cette commande (remplacez l’URL si on vous en a donné une autre) :

   ```text
   git clone https://github.com/Victor-Voyer/Pattatras.git
   ```

4. Un dossier `Pattatras` est créé avec tous les fichiers du projet.

5. Ouvrez un terminal **dans ce dossier** :
   - **Windows :** Explorateur de fichiers → dossier `Pattatras` → barre d’adresse → tapez `cmd` → Entrée.
   - **Mac :** dans Terminal, tapez `cd ` puis glissez-déposez le dossier `Pattatras`.

6. Poursuivez comme pour la [méthode 2](#méthode-2--depuis-larchive-zip-sur-votre-ordinateur) :
   - installez Node.js si ce n’est pas déjà fait ([étape 2](#étape-2--installer-nodejs-une-seule-fois)),
   - lancez `npx serve .` ([étape 4](#étape-4--lancer-le-projet)),
   - ouvrez l’adresse **Local** dans le navigateur ([étape 5](#étape-5--ouvrir-lapplication-dans-le-navigateur)).

#### Mettre à jour le projet plus tard (option Git uniquement)

Si le projet a été modifié sur GitHub et que vous voulez récupérer la dernière version :

1. Ouvrez un terminal dans le dossier `Pattatras`.
2. Tapez :

   ```text
   git pull
   ```

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
  **Solution :** utilisez la [méthode 2](#méthode-2--depuis-larchive-zip-sur-votre-ordinateur) ou la [méthode 3](#méthode-3--depuis-github) avec `npx serve .`, ou la [version en ligne](#méthode-1--version-en-ligne-la-plus-simple).

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
- la méthode utilisée (**lien en ligne**, **ZIP local** ou **GitHub**),
- le message d’erreur exact (copier-coller ou capture d’écran),
- à quelle étape vous êtes bloqué.

---

**Auteur :** Victor VOYER — Test technique CPAM
