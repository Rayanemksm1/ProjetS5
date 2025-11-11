
import java.util.*;

public class SoldatClone extends Personnage implements Comparable<SoldatClone> {
    private static int compteur = 0;
    private int ordreCreation;

    public SoldatClone(String nom, int force) {
        super(nom, force);
        this.ordreCreation = ++compteur;
    }

    // 1.1 - Générer n clones simples
    public static List<SoldatClone> genererListClone(int n) {
        List<SoldatClone> list = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            list.add(new SoldatClone("Clone" + i, 10));
        }
        return list;
    }

    // 1.7 - Générer n clones avec force aléatoire
    public static List<SoldatClone> genererListClone(int n, int alea) {
        List<SoldatClone> list = new ArrayList<>();
        Random rand = new Random();
        for (int i = 1; i <= n; i++) {
            int force = 10 + rand.nextInt(alea - 9);
            list.add(new SoldatClone("Clone" + i, force));
        }
        return list;
    }

    // 1.8 et 1.9 - Tri par force, puis par ordre de création
    @Override
    public int compareTo(SoldatClone o) {
        int diff = Integer.compare(this.force, o.force);
        if (diff == 0) {
            return Integer.compare(this.ordreCreation, o.ordreCreation);
        }
        return diff;
    }
}

