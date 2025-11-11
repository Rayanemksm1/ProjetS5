
import java.util.*;

public class Main {
    public static void main(String[] args) {

        // ===== 1.1 et 1.2 =====
        List<SoldatClone> listClone = SoldatClone.genererListClone(10);
        System.out.println("Liste initiale de clones :");
        System.out.println(listClone);

        // ===== 1.3 =====
        listClone.removeIf(c -> {
            String num = c.getNom().replace("Clone", "");
            return Integer.parseInt(num) % 2 == 0;
        });
        System.out.println("\nAprès suppression des clones pairs :");
        for (SoldatClone c : listClone) {
            System.out.println(c);
        }

        // ===== 1.4 =====
        List<Jedi> listJedi = Jedi.genererListJedi(10);
        System.out.println("\nListe initiale de jedis :");
        System.out.println(listJedi);

        // ===== 1.5 =====
        List<Jedi> sortedJedi = Jedi.trier(listJedi);
        System.out.println("\nJedis triés (méthode perso) :");
        System.out.println(sortedJedi);

        // ===== 1.6 =====
        Collections.sort(listJedi, new JediComparator());
        System.out.println("\nJedis triés (avec Comparator) :");
        System.out.println(listJedi);

        // ===== 1.7 - 1.9 =====
        List<SoldatClone> listClone2 = SoldatClone.genererListClone(10, 50);
        Collections.sort(listClone2);
        System.out.println("\nClones triés par force puis ordre de création :");
        for (SoldatClone c : listClone2) {
            System.out.println(c);
        }

        // ===== 1.10 - 1.11 =====
        Map<String, Jedi> mapJedi = Jedi.genererMapJedi(10);
        System.out.println("\nDictionnaire de Jedi :");
        System.out.println(mapJedi);

        System.out.println("\nParcours des valeurs :");
        for (Jedi j : mapJedi.values()) {
            System.out.println("Valeur : " + j);
        }

        System.out.println("\nParcours des clés :");
        for (String key : mapJedi.keySet()) {
            System.out.println("Clé : " + key);
        }

        System.out.println("\nParcours des entrées clé-valeur :");
        for (Map.Entry<String, Jedi> entry : mapJedi.entrySet()) {
            System.out.println("Clé : " + entry.getKey() + " => Valeur : " + entry.getValue());
        }

        // ===== 1.12 =====
        Set<Jedi> setJedi = Jedi.dictVersEnsemblePair(mapJedi);
        System.out.println("\nJedis dont le numéro est premier :");
        for (Jedi j : setJedi) {
            System.out.println(j);
        }
    }
}

